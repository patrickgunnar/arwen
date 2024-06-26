"use client";

import Hint from "@/src/components/hit/Hint";
import { useTranslations } from "@/src/hooks/useTranslations";
import CreateModal from "./CreateModal";

export default function Create() {
    const label = useTranslations({
        page: "System",
        label: "create",
        nested: "Navbar",
    });

    return (
        <div>
            <Hint align="end" side="bottom" label={label} asChild>
                <div>
                    <CreateModal />
                </div>
            </Hint>
        </div>
    );
}
