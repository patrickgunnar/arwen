import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { db } from "@/src/lib/db";

export async function POST(req: Request) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error("Missing the CLERK_WEBHOOK_SECRET on your .env file.");
    }

    // gets the headers
    const headerPayload = headers();
    const svixId = headerPayload.get("svix-id");
    const svixTimestamp = headerPayload.get("svix-timestamp");
    const svixSignature = headerPayload.get("svix-signature");

    // if there are no headers
    if (!svixId || !svixTimestamp || !svixSignature) {
        return new Response("Error ocurred, no svix headers", {
            status: 400,
        });
    }

    // gets the body
    const payload = await req.json();
    const body = JSON.stringify(payload);

    // creates a new svix instance
    const wh = new Webhook(WEBHOOK_SECRET);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svixId,
            "svix-timestamp": svixTimestamp,
            "svix-signature": svixSignature,
        }) as WebhookEvent;
    } catch (error: any) {
        console.log("Error verifying webhook", error);

        return new Response("Error occured", {
            status: 400,
        });
    }

    // gets the id and type
    const eventType = evt.type;

    // sync user with db
    if (eventType === "user.created") {
        const firstName = payload.data.first_name;
        const lastName = payload.data.last_name;
        const organizationName = `${firstName} ${lastName}`;

        await db.user.create({
            data: {
                externalUserId: payload.data.id,
                username: payload.data.username,
                imageUrl: payload.data.image_url,
                email: payload.data.email_addresses[0].email_address,
                organizationName,
                firstName,
                lastName,
            },
        });
    }

    // sync user update
    if (eventType === "user.updated") {
        const currentUser = await db.user.findUnique({
            where: {
                externalUserId: payload.data.id,
            },
        });

        if (!currentUser) {
            return new Response("User not found", {
                status: 404,
            });
        }

        await db.user.update({
            where: {
                externalUserId: payload.data.id,
            },
            data: {
                username: payload.data.username,
                imageUrl: payload.data.image_url,
                email: payload.data.email_addresses[0].email_address,
                firstName: payload.data.first_name,
                lastName: payload.data.last_name,
            },
        });
    }

    // sync user deletation
    if (eventType === "user.deleted") {
        await db.user.delete({
            where: {
                externalUserId: payload.data.id,
            },
        });
    }

    return new Response("", { status: 200 });
}
