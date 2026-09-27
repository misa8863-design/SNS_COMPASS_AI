export interface NavItem {
  href: string;
  label: string;
  sub?: string;
  kind: "home" | "start" | "month" | "bonus" | "ai" | "resources";
  monthNumber?: number;
}

export const mainNav: NavItem[] = [
  { href: "/", label: "HOME", sub: "現在地", kind: "home" },
  { href: "/start", label: "START", sub: "はじめに", kind: "start" },
  { href: "/month-01", label: "MONTH 01", sub: "知る", kind: "month", monthNumber: 1 },
  { href: "/month-02", label: "MONTH 02", sub: "決める", kind: "month", monthNumber: 2 },
  { href: "/month-03", label: "MONTH 03", sub: "整える", kind: "month", monthNumber: 3 },
  { href: "/month-04", label: "MONTH 04", sub: "発信する", kind: "month", monthNumber: 4 },
  { href: "/month-05", label: "MONTH 05", sub: "育てる", kind: "month", monthNumber: 5 },
  { href: "/month-06", label: "MONTH 06", sub: "仕事につなげる", kind: "month", monthNumber: 6 },
  { href: "/bonus", label: "BONUS", sub: "特典", kind: "bonus" },
  { href: "/ai", label: "SNS COMPASS AI", sub: "AIクルー", kind: "ai" },
];

export const footerNav: NavItem = { href: "/resources", label: "RESOURCES", sub: "教材・テンプレート一覧", kind: "resources" };
