"use client";

import * as React from "react";
import { UserType, setUser } from "@/src/store/slices/user";
import { useDispatch } from "react-redux";

function UserProvider({
    children,
    user,
}: {
    children: React.ReactNode;
    user: UserType | null;
}) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (user) dispatch(setUser(user));
    }, [dispatch, user]);

    return <>{children}</>;
}

export default React.memo(UserProvider);
