import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar/SideBar";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fragomen",
  description: "Create Itinerary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col h-screen w-full bg-secondary-blue ${inter.className} overflow-hidden text-white`}
      >
        <Header />
        <div className="flex h-screen">
          <aside className="h-screen md:flex hidden">
            <SideBar />
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
