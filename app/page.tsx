import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>重低音のために作る、防音室。</h1>
        <p className="tagline">
          映画や音楽の重低音を、家で周囲を気にせず、体で感じるために。
          <br />
          アルミフレームと質量パネルで組み立てる、TERASKAの防音ブースです。
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
      </div>

      <section className="block">
        <h2>なぜ、重低音なのか</h2>
        <p>
          家で映画や音楽を楽しむとき、いちばん遠慮してしまうのが重低音です。音量を下げれば迫力は消え、サブウーファーを切れば作品の半分を諦めることになる。しかも重低音は、壁を抜けて伝わりやすく、振動としても響くやっかいな音です。
        </p>
        <p>
          だからTERASKAは、重低音に向き合うことから防音ブースを設計しています。布や軽いパネルで囲うだけの簡易なブースではなく、質量のあるパネルをアルミフレームにしっかり固定し、パネルそのものも構造の一部として働く空間にすること。それが、重低音を思い切り鳴らすための土台になると考えています。
        </p>
        <p>
          もちろん使い道は映画と音楽だけではありません。夜のゲームや通話、歌や楽器の練習など、「音を出したいのに控えている」場面に広く使える空間を目指しています。
        </p>
        <p>
          <Link href="/booth" className="more">
            ［防音ブースについて詳しく →］
          </Link>
        </p>
      </section>

      <section className="block">
        <h2>TERASKAの理念</h2>
        <p>
          「理解と創意」把握する楽しさ。工夫できる自由。理論派の時短術
        </p>
        <p>
          シンプルな仕組み、必要最小限の構成、組み替えの自由度。使う人が仕組みを理解し、手を加え、愛着を深められるものづくりを大切にします。
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
              重低音の映画・音楽を楽しむために作る、組み立て式の防音ブース。1〜2畳規模で、搬入と組み立てがしやすく、壁を一枚ずつ交換しながら使い手が育てられる空間を目指しています。現在試作中です。
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
        <h2>活用のイメージ</h2>
        <div className="card-grid">
          <div className="card">
            <h3>防音ブース</h3>
            <p>
              音響設計に基づいたTERASKAの防音ブース。不要な装飾を削ぎ落とし、機能美を追求したプロフェッショナルな空間を目指します。
            </p>
          </div>
          <div className="card">
            <h3>書斎・ワークスペース</h3>
            <p>
              TERASKA
              ALUMINUMシリーズを使用した、書斎・ワークスペースの構築例。集中力を高めるソリッドな質感が特徴です。
            </p>
          </div>
          <div className="card">
            <h3>組み立てて、広げる</h3>
            <p>
              TERASKA
              組立システムは、素材を選び、組み合わせ、広げていく仕組みです。軽トラキャンパーのような「荷台から広がる、自分の空間」も構想しています（構想イメージ）。
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
