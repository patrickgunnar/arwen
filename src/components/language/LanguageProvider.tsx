"use client";

import * as React from "react";
import { Language, setLanguage } from "@/src/store/slices/language";
import { useDispatch } from "react-redux";

function LanguageProvider({
    children,
    lang,
}: {
    children: React.ReactNode;
    lang: Language;
}) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(setLanguage(lang));
    }, [dispatch, lang]);

    return <>{children}</>;
}

export default React.memo(LanguageProvider);
