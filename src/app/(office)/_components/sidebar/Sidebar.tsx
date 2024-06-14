"use client";

import { useSelector } from "react-redux";
import { SidebarItem } from "./SidebarItem";
import {
    BaggageClaim,
    Blocks,
    Folder,
    Home,
    MessageCircleWarning,
    PackageOpen,
    ShoppingBag,
} from "lucide-react";
import { StoreType } from "@/src/store";

type NestedRoute = {
    nestedTitle: string;
    nestedPath: string;
    nestedIcon: React.ElementType | null;
};

export interface SystemRoutes {
    title: string;
    path: string;
    icon: React.ElementType | null;
    hasNested: boolean;
    nested: NestedRoute[];
}

export const sidebarIcons: { [key: string]: React.ElementType } = {
    Home: Home,
    Inventory: PackageOpen,
    Sales: ShoppingBag,
    Purchases: BaggageClaim,
    Integrations: Blocks,
    Reports: MessageCircleWarning,
    Documents: Folder,
};

type ItemsType = {
    [key: string]: any;
};

export default function Sidebar() {
    const items: ItemsType = useSelector((state: StoreType) => state.language);
    const sidebar = items?.System?.Sidebar;
    const routes: SystemRoutes[] = [];

    for (const [key, value] of Object.entries(sidebar ?? {})) {
        const icon = sidebarIcons[key];
        const route: SystemRoutes = {
            ...(value as SystemRoutes),
            icon,
        };

        routes.push(route);
    }

    return (
        <aside className="flex flex-col items-center justify-start bg-primary h-full w-60">
            <ul className="flex gap-y-2 flex-col items-center justify-start w-full">
                {routes.map(({ title, path, icon, hasNested, nested }) => (
                    <SidebarItem
                        key={path}
                        title={title}
                        path={path}
                        icon={icon}
                        hasNested={hasNested}
                        nested={nested}
                    />
                ))}
            </ul>
        </aside>
    );
}
