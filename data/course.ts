import type { Lesson, Month, MonthNumber, MonthSlug } from "@/lib/types";

/**
 * 6か月のカリキュラム。
 * 教材URLは各 lesson の `url` を差し替えるだけで反映されます（"#" は準備中扱い）。
 */
export const months: Month[] = [
  {
    number: 1,
    slug: "month-01",
    verb: "知る",
    catch: "SNSの地図を広げよう。",
    theme: "SNSマーケティングの基礎を知る",
    goal: "SNSで発信するための基本知識を身につける",
    tone: "trend",
    guides: [
      { character: "mii", message: "最初は知ることから。全部覚えなくて大丈夫だよ。" },
      { character: "luku", message: "気になるアカウントを3つ見つけておくと、あとで役立つよ。" },
    ],
  },
  {
    number: 2,
    slug: "month-02",
    verb: "決める",
    catch: "SNSの航路を決めよう。",
    theme: "SNS初期設計",
    goal: "誰に・何を・なぜ届けるのかを決める",
    tone: "compass",
    guides: [
      { character: "ao", message: "AIを使うと、ここはもっと早く整理できるよ！" },
      { character: "hana", message: "完璧じゃなくて大丈夫。まずは書いてみよう！" },
    ],
  },
  {
    number: 3,
    slug: "month-03",
    verb: "整える",
    catch: "旅の準備を整えよう。",
    theme: "アカウント設計",
    goal: "プロフィールと発信テーマを整える",
    tone: "support",
    guides: [
      { character: "mii", message: "プロフィールは、あなたの名刺。一緒に磨いていこう。" },
      { character: "moko", message: "アイコンと世界観がそろうと、ぐっと覚えてもらいやすいよ。" },
    ],
  },
  {
    number: 4,
    slug: "month-04",
    verb: "発信する",
    catch: "いよいよ、最初の一歩。",
    theme: "コンテンツ制作",
    goal: "投稿を作り、発信を始める",
    tone: "spark",
    guides: [
      { character: "moko", message: "最初の投稿は、上手さより「出すこと」が大事！" },
      { character: "hana", message: "緊張してもいいよ。出せた自分をほめてあげてね。" },
    ],
  },
  {
    number: 5,
    slug: "month-05",
    verb: "育てる",
    catch: "数字を見ながら、航路を調整しよう。",
    theme: "分析・改善",
    goal: "数字を見ながら発信を改善する",
    tone: "trend",
    guides: [
      { character: "luku", message: "数字は通知表じゃなくて、次のヒントだよ。" },
      { character: "ao", message: "分析シートをAIに渡すと、改善案をまとめてくれるよ。" },
    ],
  },
  {
    number: 6,
    slug: "month-06",
    verb: "仕事につなげる",
    catch: "発信を、未来につなげよう。",
    theme: "マネタイズ",
    goal: "SNSから商品・サービス・案件につなげる",
    tone: "compass",
    guides: [
      { character: "mii", message: "ここまで来たあなたなら大丈夫。最後の目的地へ行こう。" },
      { character: "hana", message: "小さな「ありがとう」から、お仕事は始まるよ。" },
    ],
  },
];

export const lessons: Lesson[] = [
  // MONTH 01 知る
  { id: "m1-01", month: 1, chapter: 1, title: "SNSでできること・できないこと", description: "SNSが仕事や暮らしにどうつながるのか、全体像をつかもう", type: "video", duration: "約15分", url: "#", character: "mii" },
  { id: "m1-02", month: 1, chapter: 2, title: "Instagram・Threadsの違い", description: "それぞれの得意なこと、向いている発信を知ろう", type: "video", duration: "約18分", url: "#", character: "luku" },
  { id: "m1-03", month: 1, chapter: 3, title: "SNSのしくみ（アルゴリズム入門）", description: "投稿が届く流れを、やさしい言葉で理解しよう", type: "video", duration: "約20分", url: "#", character: "ao" },
  { id: "m1-04", month: 1, chapter: 4, title: "お手本アカウント探しワーク", description: "「いいな」と思うアカウントを3つ集めて、理由を書き出そう", type: "work", duration: "約25分", url: "#", character: "luku" },
  { id: "m1-05", month: 1, chapter: 5, title: "MONTH 01 ふりかえり課題", description: "今月学んだことを3行でまとめて提出しよう", type: "task", duration: "約10分", url: "#", character: "hana" },

  // MONTH 02 決める
  { id: "m2-01", month: 2, chapter: 1, title: "発信の目的を決める", description: "なぜSNSを始めるのか整理しよう", type: "video", duration: "約15分", url: "#", character: "mii" },
  { id: "m2-02", month: 2, chapter: 2, title: "ターゲット設計", description: "誰に届けたいのかを決めよう", type: "video", duration: "約20分", url: "#", character: "ao" },
  { id: "m2-03", month: 2, chapter: 3, title: "発信目的ワーク", description: "目的とターゲットをシートに書き出してみよう", type: "work", duration: "約30分", url: "#", character: "hana" },
  { id: "m2-04", month: 2, chapter: 4, title: "AIでターゲットを深掘りする", description: "SNS COMPASS AIに聞きながら、届けたい人の悩みを整理しよう", type: "ai", duration: "約15分", url: "#", character: "ao" },
  { id: "m2-05", month: 2, chapter: 5, title: "初期設計シート", description: "ここまでの内容を1枚にまとめるテンプレート", type: "download", url: "#", character: "ao" },
  { id: "m2-06", month: 2, chapter: 6, title: "SNS初期設計の提出", description: "完成した初期設計シートを提出して、フィードバックをもらおう", type: "task", duration: "約10分", url: "#", character: "mii" },

  // MONTH 03 整える
  { id: "m3-01", month: 3, chapter: 1, title: "選ばれるプロフィールの作り方", description: "ひと目で「誰の、何のアカウントか」伝わる形を知ろう", type: "video", duration: "約18分", url: "#", character: "mii" },
  { id: "m3-02", month: 3, chapter: 2, title: "発信テーマと投稿の柱を決める", description: "続けやすいテーマを3本の柱に整理しよう", type: "video", duration: "約20分", url: "#", character: "ao" },
  { id: "m3-03", month: 3, chapter: 3, title: "プロフィール設計ワーク", description: "名前・肩書き・自己紹介文を書いてみよう", type: "work", duration: "約30分", url: "#", character: "hana" },
  { id: "m3-04", month: 3, chapter: 4, title: "世界観をそろえるデザイン入門", description: "色・フォント・写真のトーンをそろえるコツ", type: "video", duration: "約15分", url: "#", character: "moko" },
  { id: "m3-05", month: 3, chapter: 5, title: "プロフィール設計シート", description: "そのまま使えるプロフィールのテンプレート", type: "download", url: "#", character: "moko" },
  { id: "m3-06", month: 3, chapter: 6, title: "プロフィールの提出", description: "整えたプロフィールのスクリーンショットを提出しよう", type: "task", duration: "約10分", url: "#", character: "mii" },

  // MONTH 04 発信する
  { id: "m4-01", month: 4, chapter: 1, title: "伝わる投稿の型", description: "最初の1枚・本文・最後のひと言の組み立て方", type: "video", duration: "約20分", url: "#", character: "moko" },
  { id: "m4-02", month: 4, chapter: 2, title: "Canvaで投稿画像をつくる", description: "テンプレートを使って、10分で1投稿を仕上げよう", type: "video", duration: "約25分", url: "#", character: "moko" },
  { id: "m4-03", month: 4, chapter: 3, title: "AIで投稿文をつくる", description: "下書きをAIと一緒に整えて、あなたの言葉に仕上げよう", type: "ai", duration: "約15分", url: "#", character: "ao" },
  { id: "m4-04", month: 4, chapter: 4, title: "投稿ネタ出しワーク", description: "今月投稿するネタを10個書き出そう", type: "work", duration: "約30分", url: "#", character: "luku" },
  { id: "m4-05", month: 4, chapter: 5, title: "はじめての3投稿", description: "3つの投稿を公開して、URLを提出しよう", type: "task", duration: "1週間", url: "#", character: "hana" },

  // MONTH 05 育てる
  { id: "m5-01", month: 5, chapter: 1, title: "見るべき数字はこの4つ", description: "インサイトの見方と、数字が意味することを知ろう", type: "video", duration: "約18分", url: "#", character: "luku" },
  { id: "m5-02", month: 5, chapter: 2, title: "伸びた投稿・伸びなかった投稿", description: "比べて気づく、改善のポイント", type: "video", duration: "約20分", url: "#", character: "luku" },
  { id: "m5-03", month: 5, chapter: 3, title: "分析シート", description: "毎週の数字を記録して、変化を見つけるテンプレート", type: "download", url: "#", character: "luku" },
  { id: "m5-04", month: 5, chapter: 4, title: "AIに分析を手伝ってもらう", description: "数字を貼り付けて、改善案を一緒に考えよう", type: "ai", duration: "約15分", url: "#", character: "ao" },
  { id: "m5-05", month: 5, chapter: 5, title: "1か月の改善レポート", description: "試したこと・わかったことを提出しよう", type: "task", duration: "約20分", url: "#", character: "mii" },

  // MONTH 06 仕事につなげる
  { id: "m6-01", month: 6, chapter: 1, title: "SNSから仕事が生まれる流れ", description: "フォロワーがお客さまになるまでの道すじを知ろう", type: "video", duration: "約20分", url: "#", character: "mii" },
  { id: "m6-02", month: 6, chapter: 2, title: "あなたの商品・サービスを考える", description: "得意なこととフォロワーの悩みを重ねてみよう", type: "work", duration: "約40分", url: "#", character: "hana" },
  { id: "m6-03", month: 6, chapter: 3, title: "案内投稿とプロフィール導線", description: "売り込まずに届く、お知らせの出し方", type: "video", duration: "約18分", url: "#", character: "moko" },
  { id: "m6-04", month: 6, chapter: 4, title: "AIでサービス案内文をつくる", description: "募集文・DM返信文の下書きをAIと仕上げよう", type: "ai", duration: "約15分", url: "#", character: "ao" },
  { id: "m6-05", month: 6, chapter: 5, title: "卒業課題：6か月の航海記録", description: "はじめの一歩から今日までをまとめて提出しよう", type: "task", duration: "約30分", url: "#", character: "mii" },
];

export const monthSlugs = months.map((m) => m.slug);

export function getMonthBySlug(slug: string): Month | undefined {
  return months.find((m) => m.slug === slug);
}

export function getMonth(n: MonthNumber): Month {
  return months[n - 1];
}

export function getLessonsByMonth(n: MonthNumber): Lesson[] {
  return lessons.filter((l) => l.month === n).sort((a, b) => a.chapter - b.chapter);
}

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function monthSlug(n: MonthNumber): MonthSlug {
  return `month-0${n}`;
}
