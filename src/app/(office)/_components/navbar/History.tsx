"use client";

import Hint from "@/src/components/hit/Hint";
import Label from "@/src/components/label/Label";
import HistoryModal from "./HistoryModal";

export default function History() {
    const TextElement = () => {
        return <Label name="Home" value="history" />;
    };

    return (
        <div className="flex items-center justify-center p-2">
            <Hint align="end" textElement={TextElement} side="bottom" asChild>
                <div>
                    <HistoryModal />
                </div>
            </Hint>
        </div>
    );
}
