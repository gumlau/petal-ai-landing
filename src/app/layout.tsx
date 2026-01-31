import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petal GTD - Beautiful Task Management",
  description:
    "Organize your life with Petal GTD - a beautiful, modern task management app inspired by Things 3. Capture ideas, plan projects, and get things done with a clean GTD workflow.",
  keywords: [
    "GTD",
    "task management",
    "productivity",
    "to-do list",
    "Things 3",
    "project management",
    "getting things done",
  ],
  authors: [{ name: "Petal GTD" }],
  creator: "Petal GTD",
  metadataBase: new URL("https://petalgtd.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://petalgtd.com",
    siteName: "Petal GTD",
    title: "Petal GTD - Beautiful Task Management",
    description:
      "Organize your life with Petal GTD - a beautiful, modern task management app inspired by Things 3. Capture ideas, plan projects, and get things done.",
  },
  twitter: {
    card: "summary",
    title: "Petal GTD - Beautiful Task Management",
    description:
      "Organize your life with Petal GTD - a beautiful, modern task management app inspired by Things 3.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
