"use client";

import { StoreType } from "@/src/store";
import { useSelector } from "react-redux";

interface Lang {
    [key: string]: any;
}

export function useTranslations({
    page,
    label,
}: {
    page: string;
    label: string;
}) {
    const lang: Lang = useSelector((state: StoreType) => state.language);
    const text = lang[page][label] ?? "None";

    return text;
}
