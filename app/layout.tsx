
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

const inter = Inter({ subsets: ["latin"] });

const agile = localFont({
  src: [
    {
      path: '../public/fonts/mooxy.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/mooxy.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: "AnyScreen",
  description: "Web design and development agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/anyscreen.png" sizes="any" />
      </head>
      <body className={agile.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <FloatingNav navItems={navItems} />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}