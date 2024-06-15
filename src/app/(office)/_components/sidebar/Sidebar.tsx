"use client";

import { useSelector } from "react-redux";
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
import { StoreType } from "@/src/store";
import Logo from "@/src/components/logo/Logo";
import SidebarWrapper from "@/src/components/wrappers/SidebarWrapper";
import { useSidebar } from "@/src/store/hooks/useSidebar";
import ToggleSidebar from "@/src/components/toggles/ToggleSidebar";

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
    Items: LayoutList,
    Groups: Boxes,
    Adjustments: Wrench,
    Costumers: Users,
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

type ItemsType = {
    [key: string]: any;
};

export default function Sidebar() {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

    const items: ItemsType = useSelector((state: StoreType) => state.language);
    const sidebar = { ...items?.System?.Sidebar };
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
            ...(value as SystemRoutes),
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
                {routes.map(({ title, path, icon, hasNested, nested }) => (
                    <Navigation
                        key={path}
                        title={title}
                        path={path}
                        icon={icon}
                        hasNested={hasNested}
                        nested={nested}
                        collapsed={collapsed}
                    />
                ))}
            </ul>
        </SidebarWrapper>
    );
}
