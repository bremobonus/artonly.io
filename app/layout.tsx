import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "the blanc. — Container Retreats, Southern Ontario",
  description:
    "Four minimal container retreats on one acre of rural Southern Ontario. Shared sauna, onsen & ice bath. Built for stillness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
