import "@/sass/dashboard/main.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Self Platform Dashboard",
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