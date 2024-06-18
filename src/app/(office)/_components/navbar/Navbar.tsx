"use client";

import { UserButton } from "@clerk/nextjs";
import Container from "./Container";
import History from "./History";
import MobileNav from "./MobileNav";
import Organizations from "./Organizations";
import Search from "./Search";
import Settings from "./Settings";
import Notifications from "./Notifications";
import ReferAndEarn from "./ReferAndEarn";
import Create from "./Create";
import Apps from "./Apps";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between bg-foreground shadow-sm shadow-secondary-foreground text-secondary-foreground p-1 h-14 overflow-hidden">
            <Container>
                <div className="hidden md:block">
                    <History />
                </div>
                <Search />
            </Container>
            <div className="hidden xl:block">
                <Container>
                    <Organizations />
                    <div className="mx-1">|</div>
                    <Container>
                        <Create />
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
