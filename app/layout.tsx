import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  ResponsiveNav  from "../components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Abhishek Kumar",
  description: "Portfolio built with Next.js 15, showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* <body className="min-h-full flex flex-col"> */}
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html >
  );
}
