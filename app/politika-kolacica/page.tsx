import { Header } from "@/components/header"

export const metadata = {
  title: "Politika Kolačića - Popularne Igre Hrvatska",
  description: "Politika korištenja kolačića za popularneigrehrvatska.com",
}

export default function PolitikaKolacica() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            <span className="text-primary">Politika</span> <span className="text-foreground">Kolačića</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Što su kolačići?</h2>
              <p className="text-foreground">
                Kolačići su male tekstualne datoteke koje web stranice pohranjuju na vaš uređaj. Koriste se za
                poboljšanje korisničkog iskustva, personalizaciju sadržaja i analitiku.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Kako koristimo kolačiće</h2>
              <p className="text-foreground mb-4">popularneigrehrvatska.com koristi kolačiće za:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Pamćenje vaših postavki i preferencija</li>
                <li>Analizu prometa i ponašanja korisnika</li>
                <li>Poboljšanje funkcionalnosti i performansi stranice</li>
                <li>Personalizaciju sadržaja i preporuka</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Vrste kolačića</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">1. Nužni kolačići</h3>
                  <p className="text-foreground">
                    Ključni za funkcioniranje stranice. Ne mogu se onemogućiti i postavljaju se automatski.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">2. Analitički kolačići</h3>
                  <p className="text-foreground">
                    Omogućuju nam analizu prometa i mjerenje učinkovitosti stranice za kontinuirano poboljšanje.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">3. Funkcionalni kolačići</h3>
                  <p className="text-foreground">
                    Omogućuju poboljšanu funkcionalnost i personalizaciju. Mogu biti postavljeni od nas ili trećih
                    strana.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Kolačići treće strane</h2>
              <p className="text-foreground">
                Koristimo analitičke servise trećih strana koji mogu postavljati vlastite kolačiće. Preporučujemo
                čitanje njihovih politika privatnosti.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Upravljanje kolačićima</h2>
              <p className="text-foreground mb-4">
                Možete kontrolirati ili brisati kolačiće u postavkama svog preglednika:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Google Chrome: Postavke → Privatnost i sigurnost → Kolačići</li>
                <li>Mozilla Firefox: Opcije → Privatnost i sigurnost → Kolačići</li>
                <li>Safari: Postavke → Privatnost → Upravljanje podacima</li>
                <li>Microsoft Edge: Postavke → Privatnost i usluge → Kolačići</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Vaša suglasnost</h2>
              <p className="text-foreground">
                Korištenjem naše stranice pristajete na korištenje kolačića. Ako ne prihvaćate, možete ih onemogućiti u
                postavkama preglednika.
              </p>
            </section>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
              <p className="text-primary font-semibold">Datum posljednje izmjene: Siječanj 2025</p>
              <p className="mt-2 text-foreground">
                Za više informacija, pročitajte našu{" "}
                <a href="/politika-privatnosti" className="text-primary hover:text-primary/80 underline">
                  Politiku Privatnosti
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
