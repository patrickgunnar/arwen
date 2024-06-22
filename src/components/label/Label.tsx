"use client";

import { useTranslations } from "@/src/hooks/useTranslations";

interface LabelProps {
    name: string;
    value: string;
    nested?: string;
}

export default function Label({ name, value, nested = "" }: LabelProps) {
    const label = useTranslations({
        page: name,
        label: value,
        nested,
    });

    return <>{label}</>;
}
