import "./globals.css";
import localFont from "next/font/local";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import ScrollToTop from "@/components/ScrollToTop";

const Manrope = localFont({
  src: "../app/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "100 900",
});

export const metadata = {
  title: "VolumeUpDotCom",
  description: "Strategic marketing, media, and logistics solutions for impactful results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 🔥 Cache-control meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${Manrope.variable} antialiased`}>
        <LayoutClientWrapper>
          {children}
          <ScrollToTop />
        </LayoutClientWrapper>
      </body>
    </html>
  );
}
