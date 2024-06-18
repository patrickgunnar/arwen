import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";

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
    //const { id } = evt.data;
    const eventType = evt.type;

    //console.log(`Webhook ID: ${id},\nWebhook TYPE: ${eventType}`);
    //console.log("Webhook body: ", body);

    // sync user with db
    // sync user update
    // sync user deletation

    return new Response("", { status: 200 });
}
