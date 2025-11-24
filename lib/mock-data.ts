export interface BettingSite {
  id: number | string
  rank?: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  votes: number
  features: string[]
  isTopChoice?: boolean
  badge?: string
  terms: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "favbet",
    rank: 1,
    name: "Favbet",
    url: "https://www.favbet.hr/",
    bonus: "Do 3000€ + 500 FREE SPINS",
    logo: "/favbet.svg",
    rating: 9.7,
    votes: 4812,
    terms: "18+ | Licencirano i sigurno | Brze isplate | 24/7 podrška na hrvatskom",
    isTopChoice: true,
    features: ["Top Kvote", "Live Casino", "Esports", "Crypto Friendly"],
  },
  {
    id: "germania",
    rank: 2,
    name: "Germania",
    url: "https://www.germaniasport.hr/hr#/",
    bonus: "Do 1000€ + 350 FREE SPINS + 15€ FREE BET",
    logo: "/germania.svg",
    rating: 9.6,
    votes: 5172,
    terms: "18+ | Uvjeti vrijede | Samo novi korisnici | Uvjeti klađenja 30x | 21 dan",
    features: ["Brze Isplate", "Mobilna App", "Live Casino", "24/7 Support"],
  },
  {
    id: "psk",
    rank: 3,
    name: "PSK",
    url: "https://www.psk.hr/",
    bonus: "40 WENSHI LION EKSKLUZIVNO",
    logo: "/psk.webp",
    rating: 9.4,
    votes: 4281,
    terms: "18+ | Igrajte odgovorno | Novi igrači | Uvjeti klađenja 35x | 30 dana | Potpuni T&C na web stranici",
    features: ["Ekskluzivne Igre", "Hrvatska Licenca", "Sportsko Klađenje", "Casino"],
  },

  {
    id: "supersport",
    rank: 4,
    name: "SuperSport",
    url: "https://www.supersport.hr/",
    bonus: "Do 300€ + 500 FREE SPINS",
    logo: "/supersport.png",
    rating: 9.3,
    votes: 4625,
    terms: "18+ | Uvjeti vrijede | Novi igrači | Uvjeti 40x | 7 dana | Potpuni T&C na stranici",
    features: ["Veliki Jackpoti", "Live Streaming", "Virtual Sport", "Casino Bonus"],
  },
]
