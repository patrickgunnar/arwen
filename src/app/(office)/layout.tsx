import UserProvider from "@/src/components/providers/UserProvider";
import ContentTable from "./_components/ContentTable";
import MainContent from "./_components/MainContent";
import Navbar from "./_components/navbar/Navbar";
import Sidebar from "./_components/sidebar/Sidebar";
import { getSelf } from "@/src/lib/authService";
import { UserType } from "@/src/store/slices/user";

export default async function OfficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const self = await getSelf();
    const user = { ...self };

    if (user) {
        delete user.externalUserId;
        delete user.id;
    }

    return (
        <UserProvider user={user as UserType}>
            <div className="flex bg-background text-inherit h-full w-full overflow-hidden">
                <Sidebar />
                <ContentTable>
                    <Navbar />
                    <MainContent>{children}</MainContent>
                </ContentTable>
            </div>
        </UserProvider>
    );
}
