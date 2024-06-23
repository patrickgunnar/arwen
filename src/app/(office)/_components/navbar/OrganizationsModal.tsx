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
import { cn } from "@/src/lib/utils";

export default function OrganizationsModal({
    organizationName,
    isMobileNav,
}: {
    organizationName: string;
    isMobileNav?: boolean;
}) {
    const title = useTranslations({
        page: "System",
        label: "organizationsModalTitle",
        nested: "Navbar",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={isMobileNav ? "lg" : "sm"}
                    variant="link"
                    className={cn("", {
                        "text-white w-full": isMobileNav,
                    })}
                >
                    <span className="truncate block max-w-36">
                        {organizationName}
                    </span>
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
