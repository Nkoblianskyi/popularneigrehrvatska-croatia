import { CasinoSiteCard } from "./casino-site-card"
import { bettingSites } from "@/lib/mock-data"

export function OurChoiceSection() {
  const ourChoice = bettingSites[0]

  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="text-center mb-8 bg-card border-2 border-primary/30 py-4 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Naša</span> <span className="text-foreground">Preporuka</span>
          </h2>
          <p className="text-muted-foreground text-xl">
            Nakon temeljite analize, ovo je naš vrhunski izbor za hrvatske igrače u 2025.
          </p>
        </div>

        <CasinoSiteCard site={ourChoice} rank={1} />

        <div className="mt-8 border-2 border-primary/30 rounded-lg p-8 bg-card shadow-lg">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            <span className="text-primary">Zašto</span> <span className="text-foreground">Naša Preporuka?</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
            <div className="space-y-6">
              <div>
                <h4 className="text-primary font-bold mb-3 text-xl">Vrhunska Sigurnost</h4>
                <p className="text-base">
                  Potpuno licencirano u Hrvatskoj s najmodernijom SSL enkripcijom i potpunom zaštitom podataka igrača.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-bold mb-3 text-xl">Najbolji Izbor Igara</h4>
                <p className="text-base">
                  Preko 1200+ slot igara, stolnih igara i live casino od vodećih svjetskih provajdera.
                </p>
              </div>

              <div>
                <h4 className="text-primary font-bold mb-3 text-xl">Express Isplate</h4>
                <p className="text-base">Lokalni načini plaćanja, brze isplate procesirana za manje od 2 sata.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-primary font-bold mb-3 text-xl">Podrška Non-Stop</h4>
                <p className="text-base">Hrvatski tim na raspolaganju 24/7 putem live chata, e-maila i telefona.</p>
              </div>

              <div>
                <h4 className="text-primary font-bold mb-3 text-xl">Ekskluzivni Bonusi</h4>
                <p className="text-base">Velikodušni welcome bonusi s fer uvjetima i redovite tjedne promocije.</p>
              </div>

              <div>
                <h4 className="text-primary font-bold mb-3 text-xl">Potpuno Hrvatski</h4>
                <p className="text-base">
                  Kompletan interface na hrvatskom jeziku s lokalnom podrškom i nacionalnim plaćanjima.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 border-2 border-primary/50 rounded-lg text-center bg-secondary">
            <p className="text-primary text-xl font-semibold mb-2">Igrajte odgovorno i sigurno</p>
            <p className="text-foreground text-base">18+ | Kockanje može biti štetno | Postavljajte limite</p>
          </div>
        </div>
      </div>
    </section>
  )
}
