"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { SystemRoutes } from "./Sidebar";
import NestedRouteItem from "./NestedRouteItem";

export function SidebarItem({
    title,
    path,
    icon,
    hasNested,
    nested,
}: SystemRoutes) {
    const pathname = usePathname();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleOpenClose = () => {
        if (hasNested) {
            setIsOpened((prev) => !prev);
        }
    };

    return (
        <li className="flex flex-col items-center justify-center w-full">
            <Button
                variant="transparent"
                className={cn("rounded-none w-full", {
                    "bg-secondary-foreground":
                        pathname.includes(path) && hasNested,
                    "bg-secondary pointer-events-none":
                        pathname === path && !hasNested,
                })}
                onClick={handleOpenClose}
            >
                {hasNested ? (
                    <span className="flex items-center justify-start text-start w-full">
                        {title}
                    </span>
                ) : (
                    <NestedRouteItem title={title} href={path} icon={icon} />
                )}
            </Button>
            {hasNested && isOpened && (
                <ul className="flex gap-y-2 flex-col w-full">
                    {nested.map(({ nestedTitle, nestedPath, nestedIcon }) => (
                        <Button
                            key={nestedPath}
                            size="sm"
                            variant="transparent"
                            className={cn("rounded-none w-full", {
                                "bg-secondary pointer-events-none":
                                    pathname === `${path}${nestedPath}`,
                            })}
                        >
                            <NestedRouteItem
                                title={nestedTitle}
                                href={`${path}${nestedPath}`}
                                icon={nestedIcon}
                            />
                        </Button>
                    ))}
                </ul>
            )}
        </li>
    );
}
