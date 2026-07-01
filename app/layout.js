import { JetBrains_Mono, Bricolage_Grotesque, Genos } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import SmoothScroll from "../components/SmoothScroll";

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
  title: "Infinity Aesthetics | Skin, Laser & Hair Clinic — Ajmer",
  description: "Ajmer's leading skin and laser clinic offering personalized aesthetic treatments.",
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
