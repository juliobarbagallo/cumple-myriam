import type { Metadata } from "next";
import {
  Cinzel,
  Great_Vibes,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/lib/invitation";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: "400",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
    locale: "es_AR",
    images: [
      {
        url: "/myriam-album-portrait.jpg",
        width: 1200,
        height: 630,
        alt: siteMeta.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cinzel.variable} ${greatVibes.variable} ${sourceSans.variable} antialiased`}
      >
        <div className="bokeh" aria-hidden>
          <span className="left-[8%] top-[12%] h-24 w-24 opacity-60" />
          <span className="right-[15%] top-[8%] h-32 w-32 opacity-40 [animation-delay:-3s]" />
          <span className="left-[40%] top-[25%] h-16 w-16 opacity-50 [animation-delay:-6s]" />
          <span className="right-[30%] top-[40%] h-20 w-20 opacity-35 [animation-delay:-2s]" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
