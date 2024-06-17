"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { ChevronDown, SearchIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const pathname = usePathname();
    const pathnameArr = pathname.split("/").filter((path) => path.length > 0);

    const [searchIn, setSearchIn] = useState<string>(
        pathnameArr[pathnameArr.length - 1] ?? ""
    );
    const [isAdvanceSearch, setIsAdvanceSearch] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

    const onClear = () => setValue("");

    return (
        <div>
            <form
                className="relative flex items-center w-full lg:w-[300px]"
                onSubmit={onSubmit}
            >
                <Button
                    type="button"
                    size="default"
                    variant="transparentYellow"
                    onClick={() => setIsAdvanceSearch((prev) => !prev)}
                    className="flex gap-x-1 items-center justify-center bg-yellow01 border border-r-0 border-secondary rounded-r-none hover:bg-secondary"
                >
                    <SearchIcon className="text-secondary-foreground h-4 w-4" />
                    <ChevronDown className="text-secondary-foreground h-4 w-4" />
                </Button>
                <Input
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                    placeholder={`Search in /${searchIn}`}
                    className="font-light text-white bg-yellow01 placeholder:text-secondary-foreground border border-l-0 border-secondary pr-10 rounded-l-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
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
            {isAdvanceSearch && (
                <div className="absolute text-black">Advance Search</div>
            )}
        </div>
    );
}
