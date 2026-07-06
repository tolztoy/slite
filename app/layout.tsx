import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Richcal Chia — Software Engineer",
  description:
    "Software Engineer building full-stack web and mobile applications from database design through production deployment.",
  keywords: ["Software Engineer", "Full-Stack", "React", "Node.js", "Flutter", "Cameroon"],
  authors: [{ name: "Ankiambom Richcal Chia" }],
  openGraph: {
    title: "Richcal Chia — Software Engineer",
    description:
      "Building full-stack web and mobile applications from database design through production deployment.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
