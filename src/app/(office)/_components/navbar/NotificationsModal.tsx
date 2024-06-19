"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Bell } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";
import { cn } from "@/src/lib/utils";

export default function NotificationsModal({
    buttonTitle,
}: {
    buttonTitle?: string;
}) {
    const title = useTranslations({
        page: "System",
        label: "notificationsModalTitle",
        nested: "Navbar",
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size={buttonTitle ? "lg" : "sm"}
                    variant="transparentYellow"
                    className={cn("text-secondary-foreground", {
                        "flex items-center justify-start gap-x-2 text-white w-full":
                            buttonTitle,
                    })}
                >
                    <Bell className="h-6 w-6" />
                    {buttonTitle && <p>{buttonTitle}</p>}
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="h-72">{/* TODO: Notifications */}</div>
            </DialogContent>
        </Dialog>
    );
}
