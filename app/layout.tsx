import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FraserHacks 2024",
  description: "Join us at John Fraser Secondary School for Fraser Hacks 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="000000" />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
