import { cn } from "@/src/lib/utils";
import Link from "next/link";

interface NavigationItemProps {
    title: string;
    href?: string;
    icon: any;
    collapsed: boolean;
    isLink?: boolean;
}

export default function NavigationItem({
    title,
    href,
    icon: Icon,
    collapsed,
    isLink,
}: NavigationItemProps) {
    let content: React.ReactNode = (
        <>
            {Icon && <Icon className="h-5 w-5" />}
            {!collapsed && (
                <span className="hidden lg:flex flex-1 truncate">{title}</span>
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
            {content}
        </div>
    );
}
