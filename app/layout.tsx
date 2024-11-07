import type { Metadata } from "next"
import "./globals.css"
import Navbar from "./components/Navbar"
import { Montserrat } from "next/font/google"

export const metadata: Metadata = {
  title: "St.Joseph's home for old aged",
  description: "Website for an old age home",
};


const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
