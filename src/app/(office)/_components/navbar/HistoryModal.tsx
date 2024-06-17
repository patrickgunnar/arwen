"use client";

import { ElementRef, useRef } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { HistoryIcon } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";

export default function HistoryModal() {
    const closeRef = useRef<ElementRef<"button">>(null);

    const title = useTranslations({
        page: "Home",
        label: "historyModalTitle",
    });
    const cancelLabel = useTranslations({
        page: "Home",
        label: "historyModalCancelLabel",
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
                <DialogClose ref={closeRef} asChild>
                    <Button variant="yellow" className="rounded-md">
                        {cancelLabel}
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
}
