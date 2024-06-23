export default function MainContent({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="box-border p-2 h-[calc(100%-3.5rem)] w-full">
            <main className="h-full w-full overflow-x-hidden overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
