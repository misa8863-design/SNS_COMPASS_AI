export type CharacterId = "mii" | "hana" | "ao" | "luku" | "moko";
export type LessonType = "video" | "work" | "task" | "download" | "ai" | "bonus";
export type Status = "done" | "current" | "todo";
export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type MonthSlug = `month-0${MonthNumber}`;
export type Tone = "compass" | "support" | "spark" | "trend";

export interface Character {
  id: CharacterId;
  name: string;
  role: string;
  areas: string[];
  intro: string;
  image: string;
  tone: Tone;
  /** クルーに相談したいときの遷移先 */
  href: string;
}

export interface GuideLine {
  character: CharacterId;
  message: string;
}

export interface Month {
  number: MonthNumber;
  slug: MonthSlug;
  verb: string;
  catch: string;
  theme: string;
  goal: string;
  tone: Tone;
  guides: GuideLine[];
}

export interface Lesson {
  id: string;
  month: MonthNumber;
  chapter: number;
  title: string;
  description: string;
  type: LessonType;
  duration?: string;
  url: string;
  character?: CharacterId;
  /** ボタン文言を個別に上書きしたいとき */
  cta?: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  format: string;
  url: string;
  /** この月に到達すると開く。未指定なら最初から開いている */
  unlockMonth?: MonthNumber;
}

export interface AiTool {
  id: string;
  title: string;
  description: string;
  example: string;
  url: string;
}
