"use client";

import Hint from "@/src/components/hit/Hint";
import { useTranslations } from "@/src/hooks/useTranslations";
import ReferAndEarnModal from "./ReferAndEarnModal";

export default function ReferAndEarn() {
    const label = useTranslations({
        page: "Home",
        label: "refer&earn",
    });

    return (
        <div>
            <Hint align="end" side="bottom" label={label} asChild>
                <div>
                    <ReferAndEarnModal />
                </div>
            </Hint>
        </div>
    );
}
