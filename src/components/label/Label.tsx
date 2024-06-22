"use client";

import * as React from "react";
import { useTranslations } from "@/src/hooks/useTranslations";

interface LabelProps {
    name: string;
    value: string;
    nested?: string;
}

function Label({ name, value, nested = "" }: LabelProps) {
    const label = useTranslations({
        page: name,
        label: value,
        nested,
    });

    return <>{label}</>;
}

export default React.memo(Label);
