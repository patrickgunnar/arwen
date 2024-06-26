"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { AlignJustify, Cog } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";
import CreateModal from "./CreateModal";
import ReferAndEarnModal from "./ReferAndEarnModal";
import NotificationsModal from "./NotificationsModal";
import AppsModal from "./AppsModal";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { ElementRef, useEffect, useRef } from "react";
import Organization from "./Organization";

export default function MobileNavModal() {
    const closeRef = useRef<ElementRef<"button">>(null);
    const matches = useMediaQuery("(min-width: 1280px)");

    const title = useTranslations({
        page: "System",
        label: "mobileNav",
        nested: "Navbar",
    });

    const createTitle = useTranslations({
        page: "System",
        label: "create",
        nested: "Navbar",
    });
    const referAndEarnTitle = useTranslations({
        page: "System",
        label: "refer&earn",
        nested: "Navbar",
    });
    const notificationsTitle = useTranslations({
        page: "System",
        label: "notifications",
        nested: "Navbar",
    });
    const settingsTitle = useTranslations({
        page: "System",
        label: "settings",
        nested: "Navbar",
    });
    const appsTitle = useTranslations({
        page: "System",
        label: "apps",
        nested: "Navbar",
    });

    useEffect(() => {
        if (matches) {
            closeRef.current?.click();
        }
    }, [matches]);

    return (
        <Dialog>
            <DialogClose ref={closeRef}></DialogClose>
            <DialogTrigger asChild>
                <Button variant="link">
                    <AlignJustify className="h-5 w-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white xl:hidden">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="w-full">
                    <div>
                        <CreateModal buttonTitle={createTitle} />
                        <ReferAndEarnModal buttonTitle={referAndEarnTitle} />
                        <NotificationsModal buttonTitle={notificationsTitle} />
                        <Button
                            size="lg"
                            variant="link"
                            className="flex items-center justify-center text-white w-full"
                        >
                            <Link
                                href="/system/settings"
                                className="flex gap-x-2 items-center justify-start h-full w-full"
                                onClick={() => {
                                    closeRef.current?.click();
                                }}
                            >
                                <Cog className="h-6 w-6" />
                                <p>{settingsTitle}</p>
                            </Link>
                        </Button>
                        <AppsModal buttonTitle={appsTitle} />
                    </div>
                    <div className="flex items-center justify-center mt-6 w-full">
                        <Organization isMobileNav />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
