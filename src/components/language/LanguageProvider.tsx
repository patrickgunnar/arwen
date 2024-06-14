"use client";

import { Language, setLanguage } from "@/src/store/slices/language";
import { useDispatch } from "react-redux";

export default function LanguageProvider({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: Language;
}) {
    const dispatch = useDispatch();

    dispatch(setLanguage(lang));

    return <>{children}</>;
}
