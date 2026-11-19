import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "問い合わせ",
  description:
    "TERASKAへのお問い合わせ・見積もり相談のページ（フォームは準備中）。",
};

export default function ContactPage() {
  return (
    <div className="container">
      <h1 className="page-title">問い合わせ</h1>
      <p className="page-lead">
        製品のこと、見積もりの相談など、お気軽にお問い合わせください。
      </p>

      <div className="note">
        このフォームは準備中です。送信機能はまだ実装されていないため、入力しても送信されません。
      </div>

      <form className="contact-form" aria-label="問い合わせフォーム（準備中）">
        <label htmlFor="name">お名前</label>
        <input id="name" name="name" type="text" placeholder="例：山田 太郎" />

        <label htmlFor="email">メールアドレス</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="例：example@example.jp"
        />

        <label htmlFor="topic">お問い合わせの種類</label>
        <select id="topic" name="topic" defaultValue="estimate">
          <option value="estimate">見積もり相談</option>
          <option value="product">製品について</option>
          <option value="exhibition">展示について</option>
          <option value="other">その他</option>
        </select>

        <label htmlFor="message">お問い合わせ内容</label>
        <textarea
          id="message"
          name="message"
          placeholder="ご相談の内容をご記入ください"
        />

        <button type="button" disabled>
          送信する（準備中）
        </button>
      </form>
    </div>
  );
}
