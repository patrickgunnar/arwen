import HomeNavigation from "./_components/HomeNavigation";
import HomeHeader from "./_components/HomeHeader";
import HomeMobileNavigation from "./_components/HomeMobileNavigation";

export default function HomeLayout({ children }: { children: string }) {
    return (
        <>
            <div className="relative flex flex-col gap-y-8 bg-white rounded-t-md rounded-b-none p-2 pb-0 w-full overflow-hidden">
                <div className="absolute pattern-wavy pattern-yellow-500 pattern-bg-white pattern-size-8 pattern-opacity-40 top-0 left-0 h-full w-full"></div>
                <HomeHeader />
                <HomeNavigation />
                <div className="lg:hidden flex justify-center items-center mb-1 z-50 w-full">
                    <HomeMobileNavigation />
                </div>
            </div>
            <div className="mt-2">{children}</div>
        </>
    );
}
