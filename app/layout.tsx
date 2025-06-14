import type { Metadata } from "next";
import localFont from "next/font/local";
import { Barlow } from 'next/font/google'
import "./globals.css";


const nohemi = localFont({
  src: './fonts/Nohemi-VF.ttf',
  display: 'swap',
  variable: '--font-nohemi'
})

const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow'
})

export const metadata: Metadata = {
  title: "Dhruv Gupta",
  description: "Dhruv Gupta's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nohemi.variable} ${barlow.variable} antialiased bg-primary-bg`}
      >
        {children}
      </body>
    </html>
  );
}
