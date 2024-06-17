"use client";

import { Button } from "@/src/components/ui/button";
import { History as HistoryIcon } from "lucide-react";
import { useState } from "react";

export default function History() {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div>
            <div className="flex items-center justify-center p-2">
                <Button
                    variant="transparentYellow"
                    onClick={() => setIsOpened((prev) => !prev)}
                    className="relative"
                >
                    <HistoryIcon className="text-secondary-foreground h-6 w-6" />
                </Button>
            </div>
            {isOpened && <div className="absolute text-black">History</div>}
        </div>
    );
}
