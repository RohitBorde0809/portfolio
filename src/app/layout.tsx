import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Borde | Portfolio",
  description: "Full Stack Developer passionate about building exceptional digital experiences",
  keywords: ["Rohit Borde", "Full Stack Developer", "Web Development", "Software Engineer", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
