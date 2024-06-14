"use client";

import { StoreType } from "@/src/store";
import { useSelector } from "react-redux";

interface Lang {
    [key: string]: any;
}

interface LabelProps {
    name: string;
    value: string;
}

export default function Label({ name, value }: LabelProps) {
    const lang: Lang = useSelector((state: StoreType) => state.language);
    const label = lang[name][value] ?? "None";

    return <>{label}</>;
}
