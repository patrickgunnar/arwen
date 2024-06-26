"use client";

import * as React from "react";
import { useTranslations } from "@/src/hooks/useTranslations";
import { LayoutList, ListStart, Presentation, Rss } from "lucide-react";
import { NavigationItem } from "./NavigationItem";

export interface HomeRoutes {
    title: string;
    path: string;
    icon?: React.ElementType;
}

export const homeIcons: { [key: string]: React.ElementType } = {
    Overview: LayoutList,
    "Getting Started": ListStart,
    Announcements: Presentation,
    "Recent Updates": Rss,
};

function HomeNavigation() {
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

    return (
        <nav className="hidden lg:block z-50 h-10 w-full">
            <ul className="flex gap-x-6 h-full w-full">
                {routes.map(({ title, path, icon }) => {
                    return (
                        <NavigationItem
                            key={path}
                            title={title}
                            path={path}
                            icon={icon}
                        />
                    );
                })}
            </ul>
        </nav>
    );
}

export default React.memo(HomeNavigation);
