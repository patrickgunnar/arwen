import { cn } from "@/src/lib/utils";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface NavigationItemProps {
    title: string;
    href?: string;
    icon: any;
    collapsed: boolean;
    isLink?: boolean;
    isOpened?: boolean;
    isNested?: boolean;
}

export default function NavigationItem({
    title,
    href,
    icon: Icon,
    collapsed,
    isLink,
    isOpened,
    isNested,
}: NavigationItemProps) {
    let content: React.ReactNode = (
        <>
            {Icon && <Icon className="h-5 w-5" />}
            {!collapsed && (
                <span
                    className={cn("hidden lg:block flex-1 truncate", {
                        "font-medium": isNested,
                    })}
                >
                    {title}
                </span>
            )}
        </>
    );

    return isLink && href ? (
        <Link
            href={href}
            className={cn(
                "flex gap-x-2 items-center justify-center text-start h-full w-full",
                {
                    "justify-start": !collapsed,
                    "justify-center": collapsed,
                    "justify-end w-[80%]": isNested && !collapsed,
                }
            )}
        >
            {content}
        </Link>
    ) : (
        <div
            className={cn(
                "flex gap-x-2 items-center justify-center text-start h-full w-full",
                {
                    "justify-start": !collapsed,
                    "justify-center": collapsed,
                }
            )}
        >
            {content}{" "}
            {isOpened ? (
                <ArrowDown className="h-3 w-3" />
            ) : (
                <ArrowRight className="h-3 w-3" />
            )}
        </div>
    );
}
