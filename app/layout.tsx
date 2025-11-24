import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Popularne Igre Hrvatska - Najbolji Casino u Hrvatskoj 2025",
  description:
    "Popularne Igre Hrvatska - Najpouzdaniji vodič za online kazina u Hrvatskoj sa ekskluzivnim bonusima, detaljnim recenzijama i profesionalnim ocjenama za 2025.",
  metadataBase: new URL("https://popularneigrehrvatska.com"),
  openGraph: {
    title: "Popularne Igre Hrvatska - Vrhunski Online Casino Vodič 2025",
    description: "Ekskluzivne ocjene i bonusi za najbolje online kazine u Hrvatskoj",
    url: "https://popularneigrehrvatska.com",
    siteName: "Popularne Igre Hrvatska",
    locale: "hr_HR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen w-full">
          {children}
          <Footer />
          <CookieBanner />
          <CasinoModal />
        </div>
      </body>
    </html>
  )
}
