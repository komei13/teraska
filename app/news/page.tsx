import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "TERASKAからのお知らせ。展示会などの告知を掲載します。",
};

export default function NewsPage() {
  return (
    <div className="container">
      <h1 className="page-title">お知らせ</h1>
      <p className="page-lead">展示会などの告知をここに掲載します。</p>

      <div className="news-item">
        <time dateTime="2026-12">2026年12月（予定）</time>
        <h3>福井駅前ハピリンで試作展示を予定しています</h3>
        <p>
          防音ブースの試作を展示し、来場者に中へ入って体験してもらう展示を予定しています。日程や内容の詳細は、決まり次第ここでお知らせします。
        </p>
        <p>重低音の映画を題材に、ドアの開閉で聞こえ方がどう変わるかを体験できる展示にする予定です。</p>
      </div>
    </div>
  );
}
