"use client";

import Container from "./Container";
import History from "./History";
import MobileNav from "./MobileNav";
import Organizations from "./Organizations";
import Search from "./Search";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between bg-foreground shadow-sm shadow-secondary-foreground text-secondary-foreground p-1 h-14 overflow-hidden">
            <Container>
                <div className="hidden md:block">
                    <History />
                </div>
                <Search />
            </Container>
            <div className="hidden lg:block">
                <Container>
                    <Organizations />
                    <div className="mx-1">|</div>
                    <Container>
                        <div>A</div>
                        <div>B</div>
                        <div>C</div>
                        <div>D</div>
                        <div>E</div>
                        <div>F</div>
                    </Container>
                </Container>
            </div>
            <div className="lg:hidden">
                <MobileNav />
            </div>
        </div>
    );
}
