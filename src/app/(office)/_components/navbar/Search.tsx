"use client";

import Hint from "@/src/components/hit/Hint";
import { Input } from "@/src/components/ui/input";
import { useTranslations } from "@/src/hooks/useTranslations";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchModal from "./SearchModal";
import { X } from "lucide-react";

export default function Search() {
    const pathname = usePathname();
    const pathnameArr = pathname.split("/").filter((path) => path.length > 0);
    const label = useTranslations({
        page: "System",
        label: "search",
        nested: "Navbar",
    });
    const histLabel = useTranslations({
        page: "System",
        label: "advancedSearch",
        nested: "Navbar",
    });

    const [value, setValue] = useState<string>("");
    const [searchIn, setSearchIn] = useState<string>(
        pathnameArr[pathnameArr.length - 1] ?? ""
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

    const onClear = () => setValue("");

    return (
        <form
            className="relative flex items-center w-full lg:w-[300px]"
            onSubmit={onSubmit}
        >
            <Hint align="end" side="bottom" label={histLabel} asChild>
                <div>
                    <SearchModal />
                </div>
            </Hint>
            <Input
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                placeholder={`${label} /${searchIn}`}
                className="font-light text-black bg-white/85 placeholder:text-secondary-foreground border border-l-0 border-secondary pr-10 rounded-l-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
            />
            {value && (
                <div className="absolute flex items-center justify-center right-3 h-full">
                    <X
                        className="text-secondary-foreground cursor-pointer transition h-4 w-6 hover:opacity-75"
                        onClick={onClear}
                    />
                </div>
            )}
        </form>
    );
}
