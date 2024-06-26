"use client";

import Hint from "@/src/components/hit/Hint";
import { useTranslations } from "@/src/hooks/useTranslations";
import { useUser } from "@/src/hooks/useUser";
import { cn } from "@/src/lib/utils";

export default function Organization({
    isMobileNav,
}: {
    isMobileNav?: boolean;
}) {
    const { organizationName } = useUser();
    const label = useTranslations({
        page: "System",
        label: "organizations",
        nested: "Navbar",
    });

    return (
        <div>
            <Hint align="end" side="bottom" label={label} asChild>
                <h4
                    className={cn(
                        "truncate block font-semibold text-sm cursor-default",
                        {
                            "max-w-36": !isMobileNav,
                            "max-w-60": isMobileNav,
                        }
                    )}
                >
                    {organizationName}
                </h4>
            </Hint>
        </div>
    );
}
