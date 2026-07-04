import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Crimson_Text } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Malua — Oráculo das Cartas",
  description: "Leitura de cartas com tema medieval — relacionamento, trabalho e família",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${cinzelDecorative.variable} ${crimsonText.variable} h-full antialiased`}
    >
      <body className="h-dvh w-full overflow-hidden flex flex-col">{children}</body>
    </html>
  );
}
