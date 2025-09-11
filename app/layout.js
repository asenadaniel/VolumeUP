import "./globals.css";
import localFont from "next/font/local";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";


const Manrope = localFont({
  src: "../app/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "100 900",
})

export const metadata = {
  title: "VolumeUpDotCom",
  description: "Strategic marketing, media, and logistics solutions for impactful results.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${Manrope.variable} antialiased`}>
        <LayoutClientWrapper>
          {children}
        </LayoutClientWrapper>
      </body>
    </html>
  );
}
