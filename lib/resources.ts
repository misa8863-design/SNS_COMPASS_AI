import { aiTools } from "@/data/aiTools";
import { bonusItems } from "@/data/bonus";
import { lessons } from "@/data/course";
import type { LessonType } from "@/lib/types";

export type ResourceCategory = "lecture" | "work" | "template" | "ai" | "bonus";

export const resourceCategories: { id: ResourceCategory; label: string }[] = [
  { id: "lecture", label: "講義" },
  { id: "work", label: "ワーク" },
  { id: "template", label: "テンプレート" },
  { id: "ai", label: "AI" },
  { id: "bonus", label: "特典" },
];

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: LessonType;
  place: string;
  href: string;
  duration?: string;
}

const lessonCategory: Record<LessonType, ResourceCategory> = {
  video: "lecture",
  work: "work",
  task: "work",
  download: "template",
  ai: "ai",
  bonus: "bonus",
};

/** 全教材を1つのリストに（検索用） */
export function getAllResources(): Resource[] {
  return [
    ...lessons.map((l) => ({
      id: l.id,
      title: l.title,
      description: l.description,
      category: lessonCategory[l.type],
      type: l.type,
      place: `MONTH 0${l.month}`,
      href: l.url,
      duration: l.duration,
    })),
    ...aiTools.map((t) => ({ id: t.id, title: t.title, description: t.description, category: "ai" as const, type: "ai" as const, place: "SNS COMPASS AI", href: t.url })),
    ...bonusItems.map((b) => ({ id: b.id, title: b.title, description: b.description, category: "bonus" as const, type: "bonus" as const, place: `特典・${b.format}`, href: b.url })),
  ];
}
