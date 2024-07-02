import Providers from "@/liv/Providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blood Donation App",
  description: "Is a blood donation app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <>
            <Toaster position="top-center" />
            {children}
          </>
        </body>
      </html>
    </Providers>
  );
}
