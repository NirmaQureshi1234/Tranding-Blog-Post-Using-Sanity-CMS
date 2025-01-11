import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tranding Blog Post Created By NIRMA QURESHI",
  description: "Tranding Blog is a modern blogging platform built with Next.js, ShadCN UI, Tailwind CSS, and Sanity CMS. Featuring dynamic routing, dark/light themes, responsive design, and the Typography Plugin for elegant text, it offers a sleek, fast, and user-friendly experience for creating and managing content effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 

<ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
         <Navbar />
      <main className="max-w-2xl mx-auto px-4">{children} </main>  
        </ThemeProvider>
      </body>
    </html>
  );
}
