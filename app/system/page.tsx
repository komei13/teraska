import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "システム",
  description:
    "TERASKA ALUMINUM／アルミフレームシステムと、開発中のTERASKA STEEL／スチールフレームシステムの紹介。",
};

export default function SystemPage() {
  return (
    <div className="container">
      <h1 className="page-title">システム</h1>
      <p className="page-lead">
        フレームと部材の組み合わせで、家具から小空間まで自分仕様に組み立てる仕組みです。
      </p>

      <section className="block">
        <h2>TERASKA ALUMINUM／アルミフレームシステム</h2>
        <p>例：書斎ブース、デスク、棚</p>
        <p>特徴：身近な空間を、自分仕様に組み立てる</p>
        <h3>このシステムでできること</h3>
        <ul>
          <li>防音ブース（書斎ブース）</li>
          <li>デスク</li>
          <li>棚</li>
          <li>将来の構想：温室・小屋などの小空間（構想中）</li>
        </ul>
        <div className="photo-placeholder">
          写真は後で入ります（アルミフレームの接合部の写真を予定）
        </div>
      </section>

      <section className="block">
        <h2>部材紹介</h2>
        <div className="card-grid">
          <div className="card">
            <h3>アルミフレーム</h3>
            <p>
              空間の骨格になるフレーム。溝に後入れナットを入れて部材を取り付けるため、フレーム本体に穴を開けずに組み替えできます。
            </p>
          </div>
          <div className="card">
            <h3>ジョイント材</h3>
            <p>
              パネルをフレームに面で挟み込んで固定する自作部材。パネルを構造の一部として働かせるのが特徴です。
            </p>
          </div>
          <div className="card">
            <h3>パネル</h3>
            <p>
              壁になる板材。用途に合わせて一枚ずつ交換でき、空間の仕様を後から変えられます。
            </p>
          </div>
        </div>
        <p>部材の一覧や価格は準備中です。</p>
      </section>

      <section className="block">
        <h2>
          TERASKA STEEL／スチールフレームシステム{" "}
          <span className="badge">開発中</span>
        </h2>
        <p>例：作業台、収納ラック、屋外向け構想</p>
        <p>特徴：用途に合わせて、しっかりした骨格をつくる</p>
        <p>現在開発中です。詳細は決まり次第お知らせします。</p>
      </section>
    </div>
  );
}
