import ContentTable from "./_components/ContentTable";
import Navbar from "./_components/navbar/Navbar";
import Sidebar from "./_components/sidebar/Sidebar";

export default function OfficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-background text-inherit h-full w-full overflow-hidden">
            <Sidebar />
            <ContentTable>
                <Navbar />
                <main className="box-border p-2">{children}</main>
            </ContentTable>
        </div>
    );
}
