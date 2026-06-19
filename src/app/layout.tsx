import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luana-groth-portfolio.vercel.app"),
  title: "Luana Groth | Full Stack",
  description:
    "Portfólio profissional de Luana Groth com foco em interfaces modernas, Next.js, React, TypeScript e projetos reais com visão de produto.",
  keywords: [
    "Luana Groth",
    "Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Portfólio",
  ],
  openGraph: {
    title: "Luana Groth | Full Stack",
    description:
      "Projetos reais, interfaces refinadas e implementação consistente com foco em produto, qualidade técnica e experiência.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luana Groth | Full Stack",
    description:
      "Portfólio com projetos reais, stack moderna e apresentação pensada para recrutadores e times de produto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[--background] text-[--foreground]">
        {children}
      </body>
    </html>
  );
}
