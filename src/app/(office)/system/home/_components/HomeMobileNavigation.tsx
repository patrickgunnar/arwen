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
import { AlignJustify } from "lucide-react";
import { useTranslations } from "@/src/hooks/useTranslations";
import { useMediaQuery } from "usehooks-ts";
import { ElementRef, useEffect, useRef } from "react";
import { HomeRoutes, homeIcons } from "./HomeNavigation";
import { NavigationItem } from "./NavigationItem";

export default function HomeMobileNavigation() {
    const closeRef = useRef<ElementRef<"button">>(null);
    const matches = useMediaQuery("(min-width: 1280px)");

    const routes: HomeRoutes[] = [];
    const translations = useTranslations({
        page: "System",
        label: "Home",
    });

    for (const [key, value] of Object.entries(translations)) {
        const icon = homeIcons[key];

        routes.push({
            ...(value as any),
            icon,
        });
    }

    const title = useTranslations({
        page: "System",
        label: "homeMobileNav",
        nested: "Home Description",
    });

    useEffect(() => {
        if (matches) {
            closeRef.current?.click();
        }
    }, [matches]);

    const handleClose = () => {
        closeRef.current?.click();
    };

    return (
        <Dialog>
            <DialogClose ref={closeRef}></DialogClose>
            <DialogTrigger asChild>
                <Button variant="link">
                    <AlignJustify className="h-6 w-6" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary border border-gray-900 text-white xl:hidden">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <nav className="lg:hidden w-full">
                    <ul className="flex flex-col gap-y-2 w-full">
                        {routes.map(({ title, path, icon }) => {
                            return (
                                <NavigationItem
                                    key={path}
                                    title={title}
                                    path={path}
                                    icon={icon}
                                    onClick={handleClose}
                                    isMobileNav
                                />
                            );
                        })}
                    </ul>
                </nav>
            </DialogContent>
        </Dialog>
    );
}
