import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>新しいDIYの形：TERASKA</h1>
        <p className="tagline">
          組み立て式の防音ブースと、使う人が育てられるフレームシステム。
          <br />
          （このサイトは制作途中のプレビューです）
        </p>
        <div className="photo-placeholder tall">
          写真は後で入ります（防音ブースの実物写真を予定）
        </div>
      </div>

      <section className="block">
        <h2>TERASKAの理念</h2>
        <p>
          「理解と創意」把握する楽しさ。工夫できる自由。理論派の時短術
        </p>
        <p>
          <Link href="/philosophy" className="more">
            ［理念と、その原点へ →］
          </Link>
        </p>
      </section>

      <section className="block">
        <h2>製品とシステム</h2>
        <div className="card-grid">
          <div className="card">
            <h3>防音ブース</h3>
            <p>
              組み立て・搬入がしやすい1〜2畳規模の防音ブース。壁を一枚ずつ交換し、机や機器を追加しながら、使い手が育てられる空間を目指しています。
            </p>
            <p>
              <Link href="/booth" className="more">
                ［製品を見る →］
              </Link>
            </p>
          </div>
          <div className="card">
            <h3>TERASKA ALUMINUM／アルミフレームシステム</h3>
            <p>例：書斎ブース、デスク、棚</p>
            <p>特徴：身近な空間を、自分仕様に組み立てる</p>
            <p>
              <Link href="/system" className="more">
                ［このシステムでできることを見る →］
              </Link>
            </p>
          </div>
          <div className="card">
            <h3>
              TERASKA STEEL／スチールフレームシステム{" "}
              <span className="badge">開発中</span>
            </h3>
            <p>例：作業台、収納ラック、屋外向け構想</p>
            <p>特徴：用途に合わせて、しっかりした骨格をつくる</p>
            <p>
              <Link href="/system" className="more">
                ［詳しく見る →］
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="block">
        <h2>お知らせ</h2>
        <div className="news-item">
          <time dateTime="2026-12">2026年12月（予定）</time>
          <h3>福井駅前ハピリンで試作展示を予定しています</h3>
          <p>
            防音ブースの試作を実際に体験できる展示を予定しています。詳細は決まり次第お知らせします。
          </p>
          <p>
            <Link href="/news" className="more">
              ［お知らせ一覧 →］
            </Link>
          </p>
        </div>
      </section>

      <section className="block">
        <h2>お問い合わせ</h2>
        <p>
          製品のこと、見積もりの相談など、お気軽にお問い合わせください。
        </p>
        <p>
          <Link href="/contact" className="cta">
            問い合わせページへ
          </Link>
        </p>
      </section>
    </div>
  );
}
