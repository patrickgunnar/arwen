"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Gem } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";
import { cn } from "@/src/lib/utils";

export default function ReferAndEarnModal({
    buttonTitle,
}: {
    buttonTitle?: string;
}) {
    const title = useTranslations({
        page: "System",
        label: "referAndEarnModalTitle",
        nested: "Navbar",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={buttonTitle ? "lg" : "sm"}
                    variant="link"
                    className={cn("", {
                        "flex items-center justify-start gap-x-2 text-white w-full":
                            buttonTitle,
                    })}
                >
                    <Gem className="h-5 w-5" />
                    {buttonTitle && <p>{buttonTitle}</p>}
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="h-72">{/* TODO: refer and earn */}</div>
            </DialogContent>
        </Dialog>
    );
}
