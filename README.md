# SNS COMPASS 受講生専用サイト（MVP）

COMPASS CREWと一緒に進む、6か月のSNSの旅。
Next.js（App Router）/ React / TypeScript / Tailwind CSS で作られています。Vercelにそのままデプロイできます。

---

## はじめかた

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 本番ビルドの確認
npm run typecheck  # 型チェック
```

Node.js 18.18 以上（推奨 20 以上）が必要です。

## Vercelへのデプロイ

1. このフォルダをGitHubリポジトリにpushする
2. Vercelで「Add New → Project」からリポジトリを選ぶ
3. Framework Preset が **Next.js** になっていることを確認して Deploy

環境変数は現時点では不要です。
会員サイトのため、`app/layout.tsx` で検索エンジンにインデックスされない設定（noindex）にしています。
公開前に Vercel の Password Protection などでアクセス制限をかけることをおすすめします。

---

## よく変更する場所

| 変えたいもの | ファイル |
| --- | --- |
| 講義・ワーク・課題のタイトル／説明／URL | `data/course.ts` の `lessons` |
| 各MONTHのテーマ・GOAL・キャラクターのセリフ | `data/course.ts` の `months` |
| 特典（BONUS）の内容とURL、解放される月 | `data/bonus.ts` |
| SNS COMPASS AI の機能とURL | `data/aiTools.ts` |
| キャラクターの紹介文・担当ページ | `data/characters.ts` |
| FV動画・poster・CTAのリンク先と位置 | `data/siteConfig.ts` |
| メニュー | `data/navigation.ts` |
| ブランドカラー・角丸・影 | `tailwind.config.ts` |
| 受講生の進捗（現在地） | `lib/progress.ts` |

### 教材URLについて

`url: "#"` のままの教材は、ボタンが **「（準備中）」** 表示になり、押せない状態になります。
Notion・Google Drive・Googleフォーム・YouTube限定公開などのURLを入れると、自動で押せるようになります。
`https://` から始まる外部URLは新しいタブで開きます。

```ts
{ id: "m2-02", month: 2, chapter: 2, title: "ターゲット設計",
  description: "誰に届けたいのかを決めよう", type: "video",
  duration: "約20分", url: "https://www.notion.so/xxxx", character: "ao" },
```

`type` には `video` / `work` / `task` / `download` / `ai` / `bonus` を指定します。タグの表示とボタン文言が自動で切り替わります。
ボタン文言を個別に変えたいときは `cta: "スライドを見る"` のように指定してください。

---

## FV動画とCTAクリック領域

- 動画：`public/videos/sns-compass-hero.mp4`（提供動画をWeb向けに再エンコード済み。2.3MB → 1.0MB）
- poster：`public/images/sns-compass-hero-poster.webp`（動画の1フレーム目）

### 重要：動画の比率は 16:9 ではありません

提供された動画は **736×400（約1.84:1）** です。
FVのコンテナは動画の実寸比（`aspect-ratio: 736 / 400`）に固定しています。そのため、CTAのクリック領域を%で指定すると、PC・タブレット・スマホのどの幅でも動画内のボタンとずれません。

### CTA位置の根拠

動画を6fpsで36フレーム抽出して解析し、「今日の学習をはじめる →」ボタンが全フレームで次の位置に固定されていることを確認しています。

```
x: 22〜257px / y: 287〜328px（736×400中）
→ left 2.99% / top 71.75% / width 32.07% / height 10.5%
```

ブラウザ上でも、1440px・820px・375px の各幅で、クリック領域が動画内ボタンと一致することを計測済みです。
スマホではボタンの高さが約21pxになるため、見た目の領域はボタンに合わせたまま、タップ領域だけを上下に44pxまで広げています。

### 動画を差し替えるとき

1. `public/videos/sns-compass-hero.mp4` と poster を置き換える
2. 動画のサイズが変わったら `data/siteConfig.ts` の `hero.width` / `hero.height` を更新する
3. ボタンの位置が変わったら `hero.cta.hitArea` を測り直す
4. 特定の画面幅だけずれる場合は `hitAreaMd`（768px以上）/ `hitAreaLg`（1024px以上）で上書きできます

書き出しは **1920×1080前後・H.264・MP4** がおすすめです。現在の動画は横幅736pxのため、PCの全幅表示では少しぼやけて見えます。

再エンコードの例（ffmpeg）：

```bash
ffmpeg -i input.mp4 -an -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 22 -preset slow -movflags +faststart public/videos/sns-compass-hero.mp4
ffmpeg -i input.mp4 -frames:v 1 -c:v libwebp -quality 88 \
  public/images/sns-compass-hero-poster.webp
```

### FVまわりのアクセシビリティ

- CTAには `aria-label="今日の学習をはじめる"` を設定し、キーボードでフォーカスできます（フォーカス時はコンパスブルーのリング）
- OSで「視差効果を減らす」を設定している人には、動画を自動再生せず poster を表示します
- 動画の右下に小さな一時停止ボタンがあります（動くコンテンツを止められるようにするため。WCAG 2.2.2）

---

## 画像

| 種類 | 場所 |
| --- | --- |
| キャラクター | `public/characters/`（mii / hana / ao / luku / moko .webp） |
| ブランド画像 | `public/brand/` |
| 動画 | `public/videos/` |
| poster | `public/images/` |

キャラクター画像はコンセプトカラー画像から丸く切り出した仮素材です。
透過PNGなど正式な素材ができたら、同じファイル名で差し替えてください。表示は丸いメダリオン形になります。

---

## 進捗（現在地）と今後の拡張

現在はモニター受講生向けのデモ値で動いています（MONTH 01 完了、MONTH 02 の「ターゲット設計」が次）。

```ts
// lib/progress.ts
const demoProgress = {
  startDone: true,
  currentMonth: 2,
  completedLessonIds: ["m1-01", ..., "m2-01"],
  nextLessonId: "m2-02",
  returning: false,
};
```

ページ側はすべて `getProgress()` 経由で進捗を読むため、将来は次のように拡張できます。

- **ログイン・会員認証**：Supabase Auth / Clerk などを追加し、`middleware.ts` で未ログインを弾く
- **進捗保存・完了チェック**：`getProgress()` をユーザーDBから取得する実装に差し替える
- **前回の続きから再開**：`returning: true` にすると、FVのCTAが「前回の続きから」になり、現在地のMONTHへ遷移します（`getHeroCta()`）
  - ※動画内のボタン文言は「今日の学習をはじめる」のままなので、文言を変える場合は動画側の差し替えも検討してください
- **Stripe / コメント / 質問フォーム / 通知**：`data/siteConfig.ts` の `links` に外部URLを置くところから始められます

---

## ディレクトリ構成

```
app/
  layout.tsx          共通レイアウト（サイドバー / スマホヘッダー / フッター）
  page.tsx            HOME / DASHBOARD
  start/              START はじめに
  [month]/            MONTH 01〜06（共通ページ。month-01〜month-06 のみ生成）
  bonus/              BONUS 特典
  ai/                 SNS COMPASS AI
  resources/          RESOURCES 教材・テンプレート一覧（検索あり）
components/
  hero/               HeroVideo, HeroClickableCTA
  home/               CharacterGuide, NextAction, JourneyMap, JourneyCard, CrewSection, RouteFromHero
  month/              MonthHero, LessonCard
  resources/          ResourceCard, ResourceSearch
  layout/             Header, Sidebar, MobileNavigation, NavList, Footer
  ui/                 CTAButton, CharacterBubble, CharacterAvatar, ProgressBar, TypeTag, Logo, CompassMark など
data/                 コンテンツと設定（ここを編集）
lib/                  型・進捗・ユーティリティ
public/               動画・画像
```

---

## デザインメモ

- 背景はウォームアイボリーに、海図のようなごく薄いドットを敷いています
- 「航路（点線）」がサイト全体のモチーフです。FVのCTAから伸びて現在地へつながり、YOUR JOURNEY・サイドバー・進捗バーにも続きます
- 状態の色分け：完了＝トレンドターコイズ＋チェック／現在地＝コンパスブルー／これから＝アイボリー
- フォントは、見出しに Zen Maru Gothic、本文に Noto Sans JP を使っています（`lib/fonts.ts`、next/font で自己ホスト）
- メインボタンは、動画内のボタンと揃えて #5CB8FF に白文字にしています。この組み合わせはコントラスト比がWCAG AAの基準を下回ります。より読みやすくしたい場合は、`components/ui/CTAButton.tsx` の `primary` で、背景を `bg-compass-700` にするなどの調整ができます
