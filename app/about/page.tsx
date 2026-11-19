import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "開発者について",
  description: "TERASKAの代表/開発責任者、寺崎 幸明の紹介ページ。",
};

export default function AboutPage() {
  return (
    <div className="container">
      <h1 className="page-title">開発者について</h1>
      <p className="page-lead">TERASKAの設計と開発を担当する人の紹介です。</p>

      <section className="block">
        <h2>代表/開発責任者</h2>
        <div className="photo-placeholder">
          写真は後で入ります（開発者の写真を予定）
        </div>
        <h3>寺崎 幸明　Komei TERASAKI</h3>
        <p>（プロフィール文は準備中です）</p>
      </section>

      <section className="block">
        <h2>お問い合わせ</h2>
        <p>
          製品や取り組みについてのご連絡は
          <Link href="/contact">問い合わせページ</Link>
          からどうぞ。
        </p>
      </section>
    </div>
  );
}
