import "./globals.css";
import { Inter } from "next/font/google";
import PrelineScript from "@/components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}
