import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import { Loader } from "@/components/loader";
import { LoaderShell } from "@/components/loader-shell";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Castle Mimarlık & İnşaat & Peyzaj | Torbalı, İzmir",
  description:
    "Castle Mimarlık & İnşaat & Peyzaj — Torbalı ve İzmir'de mimari proje, anahtar teslim inşaat ve peyzaj tasarım hizmetleri. 0532 164 67 21",
  keywords: [
    "mimarlık",
    "inşaat",
    "peyzaj",
    "Torbalı",
    "İzmir",
    "Castle Mimarlık",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoaderShell />
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
