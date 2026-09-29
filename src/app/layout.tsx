import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "王溪荣｜fureur72@163.com",
  description:
    "王溪荣的大学经历，展示人员沟通、学生管理、行政统筹、制度执行、项目协调与研究分析经历。",
  keywords: [
    "王溪荣",
    "人力资源",
    "行政管理",
    "行政职能",
    "人才发展",
    "学生工作",
    "组织协调",
    "个人作品集",
  ],
  authors: [
    {
      name: "王溪荣",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#79d4ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}