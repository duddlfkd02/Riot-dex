import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css";
import Link from "next/link";
import localFont from "next/font/local";

const Koddi = localFont({
  src: "../app/fonts/KoddiUDOnGothic-Regular.woff2",
  display: "swap",
  variable: "--font-Koddi",
});

export const metadata: Metadata = {
  title: "Riot Dex",
  description: "리그 오브 레전드 정보 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={Koddi.className}>
      <body>
        <header className="bg-gray-900 text-white p-6 fixed top-0 w-full h-16 z-10">
          <nav className="flex justify-end gap-4">
            <Link href={"/"} className="hover:text-purple-500 transition-all ">
              홈
            </Link>

            <Link
              href={"/champions"}
              className="hover:text-purple-500 transition-all"
            >
              챔피언 목록
            </Link>

            <Link
              href={"/items"}
              className="hover:text-purple-500 transition-all"
            >
              아이템 목록
            </Link>

            <Link
              href={"/rotation"}
              className="hover:text-purple-500 transition-all"
            >
              챔피언 로테이션
            </Link>
          </nav>
        </header>

        <main className="py-6 pt-20 pb-20">{children}</main>
        <footer className="bg-gray-900 p-4 mt-8 fixed bottom-0 w-full h-16">
          <p className="text-center text-white text-sm">
            [riot-dex] is not endorsed by Riot Games and does not reflect the
            views or opinions of Riot Games or anyone officially involved in
            producing or managing Riot Games properties. Riot Games and all
            associated properties are trademarks or registered trademarks of
            Riot Games, Inc.
          </p>
        </footer>
      </body>
    </html>
  );
}
