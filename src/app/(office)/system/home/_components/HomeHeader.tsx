"use client";

import * as React from "react";
import Label from "@/src/components/label/Label";
import { LayoutDashboard } from "lucide-react";
import { useUser } from "@/src/hooks/useUser";

function HomeHeader() {
    const { firstName, organizationName } = useUser();

    return (
        <div className="flex gap-x-2 items-center justify-start pt-8 px-2 z-50 w-full">
            <div className="flex items-center justify-center bg-white border border-gray-400 text-muted-foreground rounded-md p-2">
                <LayoutDashboard className="h-9 w-9" />
            </div>
            <div>
                <h1 className="font-semibold text-lg">
                    <Label
                        name="System"
                        nested="Home Description"
                        value="pre-title"
                    />
                    , {firstName}
                </h1>
                <p className="text-sm text-muted-foreground">
                    {organizationName}
                </p>
            </div>
        </div>
    );
}

export default React.memo(HomeHeader);
