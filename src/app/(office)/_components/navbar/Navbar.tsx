"use client";

import * as React from "react";
import { UserButton } from "@clerk/nextjs";
import Container from "./Container";
import History from "./History";
import MobileNav from "./MobileNav";
import Organization from "./Organization";
import Search from "./Search";
import Settings from "./Settings";
import Notifications from "./Notifications";
import ReferAndEarn from "./ReferAndEarn";
import Create from "./Create";
import Apps from "./Apps";

function Navbar() {
    return (
        <div className="flex items-center justify-between bg-foreground shadow-sm shadow-gray-400/80 text-darkened p-1 h-14 overflow-hidden">
            <Container>
                <div className="hidden md:block">
                    <History />
                </div>
                <Search />
            </Container>
            <div className="hidden xl:block">
                <Container>
                    <Organization />
                    <Create />
                    <div className="mx-1 cursor-default">|</div>
                    <Container>
                        <ReferAndEarn />
                        <Notifications />
                        <Settings />
                        <UserButton />
                        <Apps />
                    </Container>
                </Container>
            </div>
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    );
}

export default React.memo(Navbar);
