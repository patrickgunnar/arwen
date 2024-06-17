"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

interface HintProps {
    children: React.ReactNode;
    label?: string;
    textElement?: React.ElementType;
    asChild?: boolean;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
}

export default function Hint({
    children,
    label,
    textElement: TextElement,
    align,
    side,
    asChild,
}: HintProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
                <TooltipContent
                    className="bg-secondary-with-transparency-foreground border-0 text-white rounded-sm"
                    side={side}
                    align={align}
                >
                    <p className="font-medium text-xs">
                        {label && <>{label}</>}
                    </p>
                    {TextElement && <TextElement />}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
