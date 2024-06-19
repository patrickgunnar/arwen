"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { HistoryIcon } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";

export default function HistoryModal() {
    const title = useTranslations({
        page: "System",
        label: "historyModalTitle",
        nested: "Navbar",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="transparentYellow" className="relative">
                    <HistoryIcon className="text-secondary-foreground h-6 w-6" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="h-72">{/* TODO: Advanced history */}</div>
            </DialogContent>
        </Dialog>
    );
}
