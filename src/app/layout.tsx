import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ContzaProvider } from "@contza/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contza Next.js Boilerplate",
  description: "Contza CMS & Next.js Boilerplate",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContzaProvider
          websiteId={process.env.NEXT_PUBLIC_CONTZA_WEBSITE}
          contzaUrl="http://localhost:3000"
        >
          {children}
        </ContzaProvider>
      </body>
    </html>
  );
}
