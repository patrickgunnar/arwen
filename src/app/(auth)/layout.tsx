import Logo from "@/src/components/logo/Logo";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col bg-primary items-center justify-center space-y-6 min-h-full overflow-hidden overflow-y-auto">
            <Logo />
            {children}
        </div>
    );
}
