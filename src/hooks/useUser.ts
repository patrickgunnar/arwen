"use client";

import { useSelector } from "react-redux";
import { StoreType } from "../store";
import { useMemo } from "react";
import { UserType } from "../store/slices/user";

export function useUser(): UserType {
    const user = useSelector((state: StoreType) => state.user);

    return useMemo(() => {
        return user;
    }, [user]);
}
