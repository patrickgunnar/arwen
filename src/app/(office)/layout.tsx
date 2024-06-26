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
    const self = { ...(await getSelf()) };
    let user: UserType | null = null;

    if (self) {
        const { id, externalUserId, ...data } = self;

        user = {
            ...data,
            createdAt:
                self.createdAt instanceof Date
                    ? self.createdAt.toISOString()
                    : self.createdAt,
            updatedAt:
                self.updatedAt instanceof Date
                    ? self.updatedAt.toISOString()
                    : self.updatedAt,
        } as UserType;
    }

    return (
        <UserProvider user={user}>
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
