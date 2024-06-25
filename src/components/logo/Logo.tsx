import { Dot, Orbit } from "lucide-react";
import Label from "../label/Label";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

export default function Logo({ collapsed }: { collapsed?: boolean }) {
    return (
        <Link href="/system/home/overview">
            <div className="flex gap-y-2 flex-col items-center justify-center text-white px-0 pt-8 pb-4 w-full">
                <div className="flex gap-x-2 items-center justify-center w-full">
                    <Orbit className="h-7 w-7" />
                    {!collapsed && (
                        <h1 className="hidden lg:block font-extrabold font-serif text-lg uppercase">
                            <Label name="Application" value="title" />
                        </h1>
                    )}
                </div>
                {!collapsed && (
                    <div className="hidden lg:flex items-center justify-center w-full">
                        <p className="text-xs text-secondary">
                            <Label name="Application" value="description" />
                        </p>
                    </div>
                )}
                <div
                    className={cn("flex gap-x-0", {
                        "mt-2": !collapsed,
                        "mt-8": collapsed,
                    })}
                >
                    <Dot className="h-6 w-6" />
                    {!collapsed && (
                        <>
                            <Dot className="hidden lg:block h-6 w-6" />
                            <Dot className="hidden lg:block h-6 w-6" />
                            <Dot className="hidden lg:block h-6 w-6" />
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
}
