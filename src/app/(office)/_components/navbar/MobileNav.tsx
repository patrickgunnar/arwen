"use client";

import { Button } from "@/src/components/ui/button";
import { AlignJustify } from "lucide-react";
import { useState } from "react";

export default function MobileNav() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div>
            <div className="flex items-center justify-center ml-4 mr-1">
                <Button
                    variant="transparentYellow"
                    onClick={() => setIsOpened((prev) => !prev)}
                >
                    <AlignJustify className="text-secondary-foreground h-5 w-5" />
                </Button>
            </div>
            {isOpened && (
                <div className="absolute text-black">Mobile Navigation</div>
            )}
        </div>
    );
}
