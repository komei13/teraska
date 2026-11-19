import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "新しいDIYの形：TERASKA",
    template: "%s | TERASKA",
  },
  description:
    "組み立て式の防音ブースと、使う人が育てられるフレームシステムをつくるTERASKAの公式サイト（準備中）。",
};

const NAV_ITEMS = [
  { href: "/", label: "トップ" },
  { href: "/booth", label: "防音ブース" },
  { href: "/system", label: "システム" },
  { href: "/philosophy", label: "理念・設計" },
  { href: "/about", label: "開発者について" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "問い合わせ" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="site-logo">
              TERASKA
              <small>新しいDIYの形</small>
            </Link>
            <nav className="site-nav" aria-label="メインナビゲーション">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-footer-inner">
            <span className="brand">TERASKA</span>
            <nav aria-label="フッターナビゲーション">
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="copyright">© 2026 TERASKA</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
