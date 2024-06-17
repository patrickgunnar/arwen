"use client";

import { cn } from "@/src/lib/utils";
import { useSidebar } from "@/src/store/hooks/useSidebar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function ContentTable({
    children,
}: {
    children: React.ReactNode;
}) {
    const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);
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
        <div
            className={cn("flex-1 h-full overflow-hidden", {
                "w-[calc(100%-15rem)]": !collapsed,
                "w-[calc(100%-70px)]": collapsed,
            })}
        >
            {children}
        </div>
    );
}
