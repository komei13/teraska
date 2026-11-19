import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "製品：防音ブース",
  description:
    "組み立て式で搬入がしやすく、壁を替えて育てられるTERASKAの防音ブース（試作中）。",
};

export default function BoothPage() {
  return (
    <div className="container">
      <h1 className="page-title">製品：防音ブース</h1>
      <p className="page-lead">
        アルミフレームとパネルで組み立てる、1〜2畳規模の防音ブースです。現在試作中。
      </p>

      <div className="photo-placeholder tall">
        写真は後で入ります（試作ブースの実物写真を予定）
      </div>

      <section className="block">
        <h2>特徴</h2>
        <ul>
          <li>
            <strong>組み立て・搬入がしやすい</strong>
            ：フレームとパネルに分かれるので、部屋への搬入や組み立てがしやすい設計です
          </li>
          <li>
            <strong>1〜2畳の広さ</strong>
            ：夜のゲームや通話、映画・音楽鑑賞など、家で周囲への音を気にして控えている楽しみを取り戻すための空間です
          </li>
          <li>
            <strong>壁を替えて育てられる</strong>
            ：壁を一枚ずつ交換し、机や機器を追加しながら、使い手が育てられる空間を目指しています
          </li>
          <li>
            <strong>質量パネルをしっかり置く</strong>
            ：低音パネルだけでなく、質量パネルもしっかり置いている空間にしていきます（仮）
          </li>
        </ul>
      </section>

      <section className="block">
        <h2>仕組み</h2>
        <p>
          アルミフレームにパネルを固定する方式です。フレームの外側からパネルを押さえる自作のジョイント材で、パネルを面で挟み込んで固定します。
        </p>
        <p>
          パネルをフレームとジョイントの面で挟むことで、パネル自体も構造の一部として働くのが特徴です（仮）。
        </p>
        <div className="photo-placeholder">
          写真は後で入ります（フレームとジョイントの仕組みの写真を予定）
        </div>
      </section>

      <section className="block">
        <h2>仕様</h2>
        <div className="note">
          サイズ・重量・価格などの数値スペックは現在準備中です。決まり次第、ここに掲載します。
        </div>
      </section>

      <section className="block">
        <h2>体験のご案内</h2>
        <p>
          2026年12月、福井駅前ハピリンで試作展示を予定しています。ドアの開閉で聞こえ方がどう変わるかなど、実際に体験できる展示にする予定です。
        </p>
        <p>
          ご相談は
          <Link href="/contact">問い合わせページ</Link>
          からどうぞ。
        </p>
      </section>
    </div>
  );
}
