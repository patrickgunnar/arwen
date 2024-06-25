import HomeNavigation from "./_components/HomeNavigation";
import HomeHeader from "../../_components/HomeHeader";

export default function HomeLayout({ children }: { children: string }) {
    const orgsName = "Arwen's org";
    const username = "Arwen";

    return (
        <>
            <div className="flex flex-col gap-y-8 bg-white rounded-t-md rounded-b-none p-2 pb-0 w-full">
                <HomeHeader username={username} orgsName={orgsName} />
                <HomeNavigation />
            </div>
            <div className="mt-10">{children}</div>
        </>
    );
}
