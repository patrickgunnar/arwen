"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Speech } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";

export default function ReferAndEarnModal() {
    const title = useTranslations({
        page: "Home",
        label: "referAndEarnModalTitle",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="transparentYellow"
                    className="text-secondary-foreground"
                >
                    <Speech className="h-6 w-6" />
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
