"use client";

import Hint from "@/src/components/hit/Hint";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "@/src/hooks/useTranslations";
import { Cog } from "lucide-react";
import Link from "next/link";

export default function Settings() {
    const label = useTranslations({
        page: "System",
        label: "settings",
        nested: "Navbar",
    });

    return (
        <div>
            <Hint align="end" side="bottom" label={label} asChild>
                <Button
                    size="sm"
                    variant="transparentYellow"
                    className="text-secondary-foreground"
                >
                    <Link
                        href="/system/settings"
                        className="flex items-center justify-center h-full w-full"
                    >
                        <Cog className="h-5 w-5" />
                    </Link>
                </Button>
            </Hint>
        </div>
    );
}
