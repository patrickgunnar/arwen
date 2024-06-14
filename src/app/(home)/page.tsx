import Label from "@/src/components/label/Label";
import Link from "next/link";

export default async function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h4 className="text-3xl">
                <Label name="Home" value="title" />
            </h4>
            <p className="mb-10">
                <Label name="Home" value="description" />
            </p>
            <Link href="/system/home">System Home</Link>
            <Link href="/system/home/overview">Overview</Link>
            <Link href="/system/home/announcements">Announcements</Link>
            <Link href="/system/home/updates">Updates</Link>
            <Link href="/system/home/getting-started">Getting Started</Link>
            <Link href=""></Link>
        </div>
    );
}
