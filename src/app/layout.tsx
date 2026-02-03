import type { Metadata } from "next";
import { Zen_Old_Mincho } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const zen_old_mincho = Zen_Old_Mincho({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "浄土宗善福寺",
  description: "千葉県八千代市米本にある浄土宗のお寺「善福寺」の公式サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={zen_old_mincho.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
