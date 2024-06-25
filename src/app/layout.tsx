import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LanguageProvider from "../components/language/LanguageProvider";
import ReduxProvider from "../components/redux/ReduxProvider";
import { ClerkProvider } from "@clerk/nextjs";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Arwen",
    description: "Intelligent Inventory Management",
};

const locales = ["en-GB", "pt-BR"];

const getTranslations = async (locale: string): Promise<any> => {
    if (locales.includes(locale)) {
        return (await import(`../locales/${locale}.json`)).default;
    } else {
        return (await import(`../locales/en-GB.json`)).default;
    }
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const preferLang = "";
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const translations = await getTranslations(preferLang ?? locale);

    return (
        <ClerkProvider
            signInUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
            signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
            signInFallbackRedirectUrl={
                process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
            }
            signUpFallbackRedirectUrl={
                process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
            }
        >
            <html lang={locale}>
                <body className={inter.className}>
                    <ReduxProvider>
                        <LanguageProvider lang={translations}>
                            {children}
                        </LanguageProvider>
                    </ReduxProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
