"use client";

import Hint from "../hit/Hint";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

export default function ToggleSidebar({
    collapsed,
    toggleSidebar,
}: {
    collapsed: boolean;
    toggleSidebar: () => void;
}) {
    const label = collapsed ? "Expand" : "Collapse";

    return (
        <div className="hidden lg:flex items-center justify-center mt-4 mb-4 w-full">
            <Hint label={label} align="end" side="right" asChild>
                <Button
                    variant="transparent"
                    className="rounded-none h-full w-full"
                    onClick={toggleSidebar}
                >
                    {collapsed ? (
                        <MoveRight className="h-5 w-5" />
                    ) : (
                        <MoveLeft className="h-5 w-5" />
                    )}
                </Button>
            </Hint>
        </div>
    );
}
