"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { SystemRoutes } from "./Sidebar";
import NavigationItem from "./NavigationItem";
import Hint from "@/src/components/hit/Hint";

export function Navigation({
    title,
    path,
    icon,
    hasNested,
    nested,
    collapsed,
}: SystemRoutes & { collapsed: boolean }) {
    const pathname = usePathname();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const handleOpenClose = () => {
        if (hasNested) {
            setIsOpened((prev) => !prev);
        }
    };

    return (
        <li className="flex flex-col items-center justify-center w-full">
            <Hint label={title} align="end" side="right" asChild>
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
                    {hasNested && (
                        <NavigationItem
                            title={title}
                            icon={icon}
                            collapsed={collapsed}
                        />
                    )}
                    {!hasNested && (
                        <NavigationItem
                            title={title}
                            href={path}
                            icon={icon}
                            collapsed={collapsed}
                            isLink={true}
                        />
                    )}
                </Button>
            </Hint>
            {hasNested && isOpened && (
                <ul className="flex gap-y-2 flex-col w-full">
                    {nested.map(({ nestedTitle, nestedPath, nestedIcon }) => (
                        <Hint
                            key={nestedPath}
                            label={nestedTitle}
                            align="end"
                            side="right"
                            asChild
                        >
                            <Button
                                size="sm"
                                variant="transparent"
                                className={cn("rounded-none w-full", {
                                    "bg-secondary pointer-events-none":
                                        pathname === `${path}${nestedPath}`,
                                })}
                            >
                                <NavigationItem
                                    title={nestedTitle}
                                    href={`${path}${nestedPath}`}
                                    icon={nestedIcon}
                                    collapsed={collapsed}
                                    isLink={true}
                                />
                            </Button>
                        </Hint>
                    ))}
                </ul>
            )}
        </li>
    );
}