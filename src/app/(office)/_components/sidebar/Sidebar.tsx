"use client";

import * as React from "react";
import { Navigation } from "./Navigation";
import {
    ArchiveRestore,
    BaggageClaim,
    Blocks,
    Boxes,
    Coins,
    CreditCard,
    Folder,
    HandCoins,
    Home,
    LayoutList,
    MessageCircleWarning,
    NotebookPen,
    NotepadText,
    NotepadTextDashed,
    Package,
    PackageOpen,
    ReceiptText,
    ShoppingBag,
    ShoppingCart,
    Truck,
    UndoDot,
    Users,
    UsersRound,
    WalletCards,
    Wrench,
} from "lucide-react";
import Logo from "@/src/components/logo/Logo";
import SidebarWrapper from "./SidebarWrapper";
import { useSidebar } from "@/src/store/hooks/useSidebar";
import ToggleSidebar from "./ToggleSidebar";
import { useTranslations } from "@/src/hooks/useTranslations";

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
    href?: string;
}

export const sidebarIcons: { [key: string]: React.ElementType } = {
    Home: Home,
    Inventory: PackageOpen,
    Sales: ShoppingBag,
    Purchases: BaggageClaim,
    Integrations: Blocks,
    Reports: MessageCircleWarning,
    Documents: Folder,
    Items: LayoutList,
    Groups: Boxes,
    Adjustments: Wrench,
    Customers: Users,
    "Sales Orders": ShoppingCart,
    Packages: Blocks,
    Shipments: Truck,
    Invoices: NotepadText,
    "Sales Receipt": ReceiptText,
    "Payments Received": CreditCard,
    "Sales Returns": UndoDot,
    "Credit Notes": NotebookPen,
    Vendors: UsersRound,
    Expenses: HandCoins,
    "Purchase Orders": Package,
    "Purchase Receives": ArchiveRestore,
    Bills: NotepadTextDashed,
    "Payment Made": Coins,
    "Vendor Credits": WalletCards,
};

function Sidebar() {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    const sidebar = useTranslations({
        page: "System",
        label: "Sidebar",
    });
    const routes: SystemRoutes[] = [];

    for (const [key, value] of Object.entries(sidebar ?? {})) {
        const nestedRoutes = [];
        const currentValue: any = {
            ...(value as any),
        };

        if (value && currentValue.hasNested) {
            for (const [nestedKey, nestedValue] of Object.entries(
                currentValue.nested ?? {}
            )) {
                const nestedIcon = sidebarIcons[nestedKey as string];
                const nestedRoute = {
                    ...(nestedValue as any),
                    nestedIcon,
                };

                nestedRoutes.push(nestedRoute);
            }
        }

        const icon = sidebarIcons[key];
        const route: SystemRoutes = {
            ...(value as any),
            nested: nestedRoutes,
            icon,
        };

        routes.push(route);
    }

    const toggleSidebar = () => {
        collapsed ? onExpand() : onCollapsed();
    };

    return (
        <SidebarWrapper
            collapsedState={collapsed}
            onCollapsed={onCollapsed}
            onExpand={onExpand}
        >
            <Logo collapsed={collapsed} />
            <ToggleSidebar
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
            />
            <ul className="flex gap-y-2 flex-col items-center justify-start w-full">
                {routes.map(({ title, path, icon, hasNested, nested, href }) => (
                    <Navigation
                        key={`${title}-${path}`}
                        title={title}
                        path={path}
                        icon={icon}
                        hasNested={hasNested}
                        nested={nested}
                        collapsed={collapsed}
                        href={href}
                    />
                ))}
            </ul>
        </SidebarWrapper>
    );
}

export default React.memo(Sidebar);
