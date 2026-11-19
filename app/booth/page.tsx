import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "製品：防音ブース",
  description:
    "重低音の映画・音楽を家で思い切り楽しむために作る、組み立て式のTERASKA防音ブース（試作中）。",
};

export default function BoothPage() {
  return (
    <div className="container">
      <h1 className="page-title">製品：防音ブース</h1>
      <p className="page-lead">
        重低音のために作る、組み立て式の防音ブースです。アルミフレームとパネルで組み立てる1〜2畳規模の空間で、現在試作中です。
      </p>

      <figure className="figure-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/booth-room.webp"
          alt="部屋の片隅に置かれた防音ブースのイメージ"
        />
        <figcaption>
          部屋に置いたブースのイメージ（AI生成イメージです。実物の写真ではありません）
        </figcaption>
      </figure>

      <section className="block">
        <h2>重低音を、諦めない</h2>
        <p>
          映画の爆発音も、音楽のベースも、作品の迫力は重低音が担っています。でも家では、周囲への遠慮から音量を絞り、サブウーファーを切ってしまうことが少なくありません。重低音は壁を抜けて伝わりやすく、床や壁を震わせる振動にもなるため、「うるさい」と感じさせやすい音でもあります。
        </p>
        <p>
          TERASKAの防音ブースは、この重低音と正面から向き合うために作っています。狙いは、数値の大きさを競うことではなく、「家で、周囲を気にせず、作品をそのままの迫力で楽しめる」こと。そのために、軽い素材で囲うだけの作りではなく、質量のあるパネルとしっかりしたフレームで空間を作る道を選びました。
        </p>
        <figure className="figure-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/booth-cinema.webp"
            alt="防音ブースの中で大画面の映画を観るイメージ"
          />
          <figcaption>
            ブース内での映画体験のイメージ（AI生成イメージです。実物の写真ではありません）
          </figcaption>
        </figure>
      </section>

      <section className="block">
        <h2>特徴</h2>
        <ul>
          <li>
            <strong>質量パネルをしっかり置く</strong>
            ：重低音に向き合うには、壁そのものの質量が欠かせません。低音対策のパネルだけでなく、質量のあるパネルをフレームに固定して置く空間にしていきます
          </li>
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
        </ul>
        <p>
          映画・音楽が中心の設計ですが、用途はそれだけに限りません。ゲームや通話、歌、楽器の練習など、音を出す楽しみ全般に使える空間を目指しています。
        </p>
      </section>

      <section className="block">
        <h2>仕組み</h2>
        <p>
          アルミフレームにパネルを固定する方式です。フレームの外側からパネルを押さえる自作のジョイント材で、パネルを面で挟み込んで固定します。
        </p>
        <p>
          パネルをフレームとジョイントの面で挟むことで、パネル自体も構造の一部として働く設計です。布やパネルを吊る・貼るだけの簡易ブースとは、空間の作り方が根本から異なります。
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
