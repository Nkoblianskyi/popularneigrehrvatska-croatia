"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary p-4 z-50 shadow-2xl shadow-black/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-foreground text-sm">
            Koristimo kolačiće kako bismo vam pružili najbolje korisničko iskustvo i personalizirane preporuke.
            Nastavljanjem korištenja stranice slažete se s našom{" "}
            <Link href="/politika-privatnosti" className="text-primary hover:underline font-semibold">
              Politikom Privatnosti
            </Link>{" "}
            i{" "}
            <Link href="/politika-kolacica" className="text-primary hover:underline font-semibold">
              Politikom Kolačića
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={rejectCookies}
            variant="outline"
            size="sm"
            className="border-2 border-border text-foreground hover:bg-secondary bg-transparent"
          >
            Odbij
          </Button>
          <Button
            onClick={acceptCookies}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-background font-bold"
          >
            Prihvati
          </Button>
        </div>
      </div>
    </div>
  )
}
