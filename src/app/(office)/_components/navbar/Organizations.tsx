"use client";

import Hint from "@/src/components/hit/Hint";
import { useTranslations } from "@/src/hooks/useTranslations";
import OrganizationsModal from "./OrganizationsModal";
import { useUser } from "@/src/hooks/useUser";

export default function Organizations() {
    const { organizationName } = useUser();
    const label = useTranslations({
        page: "System",
        label: "organizations",
        nested: "Navbar",
    });

    return (
        <div>
            <Hint align="end" side="bottom" label={label} asChild>
                <div>
                    <OrganizationsModal organizationName={organizationName} />
                </div>
            </Hint>
        </div>
    );
}
