import { Header } from "@/components/header"

export const metadata = {
  title: "Politika Privatnosti - Popularne Igre Hrvatska",
  description: "Politika privatnosti i zaštite podataka za popularneigrehrvatska.com",
}

export default function PolitikaPrivatnosti() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            <span className="text-primary">Politika</span> <span className="text-foreground">Privatnosti</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Uvod</h2>
              <p className="text-foreground">
                popularneigrehrvatska.com ("mi", "naša stranica") posvećeni smo zaštiti privatnosti naših posjetitelja.
                Ova politika opisuje kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s hrvatskim i EU
                zakonima o zaštiti podataka.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Podaci koje prikupljamo</h2>
              <p className="text-foreground mb-4">Prikupljamo sljedeće informacije:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Tehnički podaci (IP adresa, tip preglednika, operativni sustav)</li>
                <li>Analitički podaci (stranice koje posjećujete, vrijeme boravka)</li>
                <li>Kolačići za poboljšanje funkcionalnosti stranice</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Kako koristimo podatke</h2>
              <p className="text-foreground mb-4">Vaše podatke koristimo za:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Poboljšanje sadržaja i funkcionalnosti stranice</li>
                <li>Analizu korištenja i optimizaciju korisničkog iskustva</li>
                <li>Pružanje relevantnih preporuka kazina</li>
                <li>Osiguranje sigurnosti i prevenciju zloupotrebe</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Dijeljenje podataka</h2>
              <p className="text-foreground">
                Ne prodajemo niti dijelimo vaše osobne podatke s trećim stranama osim kada je to zakonski potrebno ili
                za pružanje naših usluga (npr. analitički alati).
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Kolačići</h2>
              <p className="text-foreground">
                Koristimo kolačiće za analitiku i poboljšanje funkcionalnosti. Možete kontrolirati kolačiće u postavkama
                preglednika. Više u našoj{" "}
                <a href="/politika-kolacica" className="text-primary hover:text-primary/80 underline">
                  Politici Kolačića
                </a>
                .
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Vaša prava</h2>
              <p className="text-foreground mb-4">Imate pravo na:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Pristup vašim osobnim podacima</li>
                <li>Ispravak netočnih podataka</li>
                <li>Brisanje podataka</li>
                <li>Ograničavanje obrade</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Sigurnost</h2>
              <p className="text-foreground">
                Primjenjujemo napredne tehničke i organizacijske sigurnosne mjere za zaštitu vaših podataka od
                neovlaštenog pristupa ili zloupotrebe.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Promjene politike</h2>
              <p className="text-foreground">
                Zadržavamo pravo izmjene ove politike. Sve promjene bit će objavljene na ovoj stranici s datumom
                ažuriranja.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Kontakt</h2>
              <p className="text-foreground">
                Za pitanja o politici privatnosti, kontaktirajte nas putem informacija dostupnih na našoj stranici.
              </p>
            </section>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
              <p className="text-primary font-semibold">Datum posljednje izmjene: Siječanj 2025</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
