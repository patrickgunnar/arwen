"use client";

import { usePathname } from "next/navigation";
import { HomeRoutes } from "./HomeNavigation";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

export function NavigationItem({
    title,
    path,
    icon: Icon,
    isMobileNav,
    onClick,
}: HomeRoutes & { isMobileNav?: boolean; onClick?: () => void }) {
    const pathname = usePathname();

    return (
        <li
            className={cn({
                "w-full": isMobileNav,
            })}
        >
            <Button
                variant="ghost"
                className={cn(
                    "border-b-2 rounded-none h-full w-full hover:bg-transparent hover:border-yellow-400",
                    {
                        "border-transparent": pathname !== path,
                        "border-yellow-500 pointer-events-none":
                            pathname === path,
                        "hover:text-white": isMobileNav,
                    }
                )}
            >
                <Link
                    href={path}
                    className={cn("flex items-center gap-x-2 h-full w-full", {
                        "justify-center": !isMobileNav,
                        "justify-start": isMobileNav,
                    })}
                    onClick={onClick}
                >
                    {Icon && <Icon className="h-5 w-5" />}
                    {title}
                </Link>
            </Button>
        </li>
    );
}
