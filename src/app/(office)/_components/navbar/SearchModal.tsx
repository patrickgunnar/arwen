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
import { ChevronDown, SearchIcon } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";

export default function SearchModal() {
    const closeRef = useRef<ElementRef<"button">>(null);

    const title = useTranslations({
        page: "Home",
        label: "searchModalTitle",
    });
    const cancelLabel = useTranslations({
        page: "Home",
        label: "searchModalCancelLabel",
    });
    const searchLabel = useTranslations({
        page: "Home",
        label: "searchModalLabel",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    type="button"
                    size="default"
                    variant="transparentYellow"
                    onClick={() => {}}
                    className="flex gap-x-1 items-center justify-center bg-white/85 border border-r-0 border-secondary rounded-r-none"
                >
                    <SearchIcon className="text-secondary-foreground h-4 w-4" />
                    <ChevronDown className="text-secondary-foreground h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="h-72">{/* TODO: Advanced Search */}</div>
                <div className="flex justify-between">
                    <DialogClose ref={closeRef} asChild>
                        <Button
                            size="lg"
                            variant="yellow"
                            className="rounded-md"
                        >
                            {cancelLabel}
                        </Button>
                    </DialogClose>
                    <Button
                        size="lg"
                        variant="yellow"
                        className="rounded-md"
                        disabled={false}
                        onClick={() => {}}
                    >
                        {searchLabel}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
