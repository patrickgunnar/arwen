"use client";

import { StoreType } from "@/src/store";
import { useMemo } from "react";
import { useSelector } from "react-redux";

interface Lang {
    [key: string]: any;
}

export function useTranslations({
    page,
    label,
    nested,
}: {
    page: string;
    label: string;
    nested?: string;
}) {
    const lang: Lang = useSelector((state: StoreType) => state.language);

    return useMemo(() => {
        if (!page && !label) return "No label";

        const text: string = nested
            ? lang[page]?.[nested]?.[label]
            : lang[page]?.[label];

        return text ?? "Label not found";
    }, [label, lang, nested, page]);
}
