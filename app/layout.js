// import "./globals.css";
// import localFont from "next/font/local";
// import LayoutClientWrapper from "@/components/LayoutClientWrapper";
// import ScrollToTop from "@/components/ScrollToTop";

// const Manrope = localFont({
//   src: "../app/fonts/Manrope-VariableFont_wght.ttf",
//   variable: "--font-manrope",
//   display: "swap",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "VolumeUpDotCom",
//   description: "Strategic marketing, media, and logistics solutions for impactful results.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <head>
//         {/* 🔥 Cache-control meta tags */}
//         <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
//         <meta httpEquiv="Pragma" content="no-cache" />
//         <meta httpEquiv="Expires" content="0" />
//       </head>
//       <body className={`${Manrope.variable} antialiased`}>
//         <LayoutClientWrapper>
//           {children}
//           <ScrollToTop />
//         </LayoutClientWrapper>
//       </body>
//     </html>
//   );
// }

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VolumeUp Limited",
    "url": "https://volumeuplimited.com",
    "logo": "https://volumeuplimited.com/volume.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2348028287435",
      "contactType": "Customer Service",
      "areaServed": "NG",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Block D8 Diamond Estate Phase 3 Igando Road",
      "addressLocality": "Alimosho",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://www.instagram.com/your_instagram_handle"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Cache-control meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        {/* ✅ Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
