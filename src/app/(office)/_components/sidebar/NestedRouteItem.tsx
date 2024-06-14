import Link from "next/link";

interface NestedRouteItemProps {
    title: string;
    href: string;
    icon: any;
}

export default function NestedRouteItem({
    title,
    href,
    icon: Icon,
}: NestedRouteItemProps) {
    return (
        <Link
            href={href}
            className="flex gap-x-2 items-center text-start h-full w-full"
        >
            {Icon && <Icon className="h-5 w-5" />}
            <span className="flex-1 truncate">{title}</span>
        </Link>
    );
}
