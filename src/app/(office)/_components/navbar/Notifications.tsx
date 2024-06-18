"use client";

import Hint from "@/src/components/hit/Hint";
import { useTranslations } from "@/src/hooks/useTranslations";
import NotificationsModal from "./NotificationsModal";

export default function Notifications() {
    const label = useTranslations({
        page: "Home",
        label: "notifications",
    });

    return (
        <div>
            <Hint align="end" side="bottom" label={label} asChild>
                <div>
                    <NotificationsModal />
                </div>
            </Hint>
        </div>
    );
}
