import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
const nunito = Nunito({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "BoBo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/LOGO.png"
          type="image/png"
        />
      </head>
      <body className={`${nunito.className} flex items-start justify-between`}>
        <SideBar />
        <main className="w-full h-full pl-[250px]">
          {children}
        </main>
      </body>
    </html>
  );
}
