import Sidebar from "./_components/sidebar/Sidebar";

export default function OfficeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-background h-full">
            <Sidebar />
            <main className="flex-1 h-full">{children}</main>
        </div>
    );
}
