"use client";

import { cn } from "@/src/lib/utils";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

interface SidebarWrapperProps {
    children: React.ReactNode;
    collapsedState: boolean;
    onCollapsed: () => void;
    onExpand: () => void;
}

export default function SidebarWrapper({
    children,
    collapsedState,
    onCollapsed,
    onExpand,
}: SidebarWrapperProps) {
    const matches = useMediaQuery("(max-width: 1024px)");
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        if (matches) {
            onCollapsed();
        } else {
            onExpand();
        }
    }, [matches, onCollapsed, onExpand]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <aside
            className={cn(
                "flex flex-col items-center justify-start bg-primary h-full",
                {
                    "w-60": !collapsedState,
                    "w-[70px]": collapsedState,
                }
            )}
        >
            {children}
        </aside>
    );
}
