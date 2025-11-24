import { Header } from "@/components/header"

export const metadata = {
  title: "O Nama - Popularne Igre Hrvatska",
  description:
    "Saznajte više o Popularne Igre Hrvatska - vašem pouzdanom vodiču za najbolje online kazino iskustvo u Hrvatskoj.",
}

export default function ONama() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            <span className="text-primary">O</span> <span className="text-foreground">Nama</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Tko Smo Mi?</h2>
              <p className="text-foreground">
                Popularne Igre Hrvatska je vodeća neovisna platforma za ocjenjivanje i preporuke online kazina u
                Hrvatskoj. Naša misija je pružiti hrvatskim igračima najpouzdanije informacije i pomoći im pronaći
                najbolje online kazino iskustvo.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Naša Misija</h2>
              <p className="text-foreground mb-4">
                Vjerujemo da svaki igrač zaslužuje transparentne, točne i ažurirane informacije o online kazinima. Zato
                naš tim stručnjaka testira i ocjenjuje svaku platformu kako bi vam omogućili informirane odluke.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Neovisne i poštene recenzije</li>
                <li>Redovito ažurirane ocjene</li>
                <li>Testiranje s pravim novcem</li>
                <li>Fokus na sigurnost igrača</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Kako Ocjenjujemo</h2>
              <p className="text-foreground mb-4">
                Svaki kazino prolazi kroz naš rigorozni proces vrednovanja koji uključuje:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Provjeru licence i sigurnosnih standarda</li>
                <li>Testiranje kvalitete igara i provajdera</li>
                <li>Analizu bonusa i uvjeta</li>
                <li>Ocjenu korisničke podrške</li>
                <li>Testiranje brzine i metoda plaćanja</li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Naš Tim</h2>
              <p className="text-foreground">
                Naš tim se sastoji od iskusnih stručnjaka za online gaming industriju s višegodišnjim iskustvom u
                recenziranju i ocjenjivanju online kazina. Svi članovi našeg tima dijele strast prema odgovornom
                kockanju i transparentnosti.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-4">Odgovorno Kockanje</h2>
              <p className="text-foreground">
                Promicanje odgovornog kockanja je naš prioritet. Uvijek preporučujemo igračima da postavljaju limite,
                igraju samo s novcem koji mogu priuštiti izgubiti, i potraže pomoć ako osjećaju da razvijaju problem s
                kockanjem.
              </p>
            </section>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-8">
              <p className="text-primary font-semibold text-center">
                Hvala što ste dio Popularne Igre Hrvatska zajednice!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
