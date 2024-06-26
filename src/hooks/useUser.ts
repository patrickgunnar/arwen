"use client";

import { useSelector } from "react-redux";
import { StoreType } from "../store";
import { UserType } from "../store/slices/user";

export function useUser(): UserType {
    return useSelector((state: StoreType) => state.user);
}
