"use client";

import { StoreType } from "@/src/store";
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
    const text = nested ? lang[page][nested][label] : lang[page][label];

    return text ?? "None";
}
