import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "理念・設計",
  description:
    "TERASKAの理念「理解と創意」と、理念を形にする設計についてのページ。",
};

export default function PhilosophyPage() {
  return (
    <div className="container">
      <h1 className="page-title">理念・設計</h1>
      <p className="page-lead">TERASKAの理念と、その原点、設計の考え方です。</p>

      <section className="block">
        <h2>TERASKAの理念</h2>
        <p>
          「理解と創意」把握する楽しさ。工夫できる自由。理論派の時短術
        </p>
        <div className="photo-placeholder">
          写真は後で入ります（理念を表す写真・動画を予定）
        </div>
        <p>（理念の原点についての文章は準備中です）</p>
      </section>

      <section className="block">
        <h2>理念を形にする設計</h2>
        <p>
          シンプルな仕組み、必要最小限の構成、組み替えの自由度。TERASKAは、使う人が仕組みを理解し、手を加え、愛着を深められるものづくりを大切にします。
        </p>
        <p>
          設計の統一によって使用工具を減らすなど、組み立てる人の負担を減らす工夫も設計の一部です。アルミフレームシステムの接合部は、6角レンチ一本で組み立て・拡張ができる自由度の高さを目指しています。
        </p>
        <p>
          また、防音室のコストは資材費だけでは決まりません。設計、音響測定、輸送、組み立て設置にこそコストがかかっている。TERASKAは、その前提を踏まえたうえで、組み立て式という形にコストと自由度の両立を探っています。
        </p>
      </section>
    </div>
  );
}
