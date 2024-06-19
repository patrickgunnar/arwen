"use client";

import Hint from "@/src/components/hit/Hint";
import HistoryModal from "./HistoryModal";
import { useTranslations } from "@/src/hooks/useTranslations";

export default function History() {
    const title = useTranslations({
        page: "System",
        label: "history",
        nested: "Navbar",
    });

    return (
        <div className="flex items-center justify-center p-2">
            <Hint align="end" label={title} side="bottom" asChild>
                <div>
                    <HistoryModal />
                </div>
            </Hint>
        </div>
    );
}
