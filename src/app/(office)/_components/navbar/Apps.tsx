"use client";

import Hint from "@/src/components/hit/Hint";
import { useTranslations } from "@/src/hooks/useTranslations";
import AppsModal from "./AppsModal";

export default function Apps() {
    const label = useTranslations({
        page: "Home",
        label: "apps",
    });

    return (
        <div className="flex items-center justify-center p-2">
            <Hint align="end" side="bottom" label={label} asChild>
                <div>
                    <AppsModal />
                </div>
            </Hint>
        </div>
    );
}
