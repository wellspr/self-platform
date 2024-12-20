import "@/sass/auth/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In to Dashboard",
    description: "Generated by create next app | Developed by Paulo Wells",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}