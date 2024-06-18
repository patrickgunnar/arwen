"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "@/src/hooks/useTranslations";

export default function OrganizationsModal({
    organizationName,
}: {
    organizationName: string;
}) {
    const title = useTranslations({
        page: "Home",
        label: "organizationsModalTitle",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    variant="transparentYellow"
                    className="text-secondary-foreground"
                >
                    <span className="truncate block max-w-36">{organizationName}</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="h-72">{/* TODO: Organizations */}</div>
            </DialogContent>
        </Dialog>
    );
}
