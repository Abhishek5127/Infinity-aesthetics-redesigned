import { JetBrains_Mono, Bricolage_Grotesque, Genos } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SmoothScroll from "../components/SmoothScroll";
import { createMetadata, SITE_URL } from "../lib/seo";

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...createMetadata({
    title: "Skin Clinic Ajmer | Infinity Aesthetics",
    description:
      "Infinity Aesthetics is a skin, laser, and hair clinic in Ajmer offering consultation-led acne, PRP, peel, facial, and laser care.",
    path: "/",
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage_Grotesque.variable} ${jetbrains.variable} ${genos.variable}`}>
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
