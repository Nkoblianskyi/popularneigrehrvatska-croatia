import { Header } from "@/components/header"

export const metadata = {
  title: "Odgovorno Kockanje - Najbolji Hrvatski Casino",
  description: "Informacije o odgovornom kockanju i pomoć za osobe s problemima kockanja",
}

export default function OdgovornoKockanje() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">
            <span className="text-amber-600">Odgovorno</span> <span className="text-slate-200">Kockanje</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
            <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Kockajte odgovorno</h2>
              <p>
                Online kockanje treba biti zabava i razonoda, nikada ne bi trebalo postati problem.
                najboljihrvatskicasino.com promovira odgovorno kockanje i pruža informacije koje će vam pomoći da igrate
                sigurno.
              </p>
            </section>

            <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Znakovi problema s kockanjem</h2>
              <p className="mb-4">Možda imate problem s kockanjem ako:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Kockate više nego što možete priuštiti</li>
                <li>Pokušavate nadoknaditi gubitke</li>
                <li>Zanemarujete obitelj, posao ili druge obaveze</li>
                <li>Posuđujete novac za kockanje</li>
                <li>Osjećate se krivim ili tjeskobnim zbog kockanja</li>
                <li>Ležite o tome koliko kockate</li>
                <li>Ne možete prestati kockati iako želite</li>
              </ul>
            </section>

            <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Savjeti za sigurno kockanje</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Postavite budžet i pridržavajte ga se</li>
                <li>Nikada ne pokušavajte nadoknaditi gubitke</li>
                <li>Kockajte samo s novcem koji možete priuštiti izgubiti</li>
                <li>Postavite vremenska ograničenja</li>
                <li>Ne kockajte pod utjecajem alkohola ili droga</li>
                <li>Pravite redovite pauze</li>
                <li>Shvatite da je kockanje zabava, ne način za zaradu novca</li>
              </ul>
            </section>

            <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Samoograničavanje</h2>
              <p>
                Većina online kazina nudi alate za samoograničavanje koji vam omogućuju postavljanje limita depozita,
                gubitaka ili vremena igranja. Neki nude i mogućnost samoisključenja na određeno razdoblje ili trajno.
              </p>
            </section>

            <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Zaštita maloljetnika</h2>
              <p className="mb-4">
                Kockanje je strogo zabranjeno osobama mlađim od 18 godina. Ako imate djecu ili mladež u kući:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Koristite roditeljsku kontrolu na uređajima</li>
                <li>Ne dijeljite svoje podatke za prijavu</li>
                <li>Educiranje djece o rizicima kockanja</li>
                <li>Pratite njihovu aktivnost na internetu</li>
              </ul>
            </section>

            <section className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-amber-600 mb-4">Gdje Potražiti Pomoć</h2>
              <p className="mb-4">
                Ako vi ili netko koga poznajete ima problem s kockanjem, pomoć je dostupna. Kontaktirajte jednu od
                sljedećih organizacija:
              </p>

              <div className="bg-slate-800/70 border border-amber-700/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-amber-500 mb-4">Linija za Pomoć</h3>
                <div className="space-y-2">
                  <p className="text-lg">
                    <span className="font-bold text-amber-600">Telefon:</span>{" "}
                    <a href="tel:+38514877777" className="text-white hover:text-amber-500 transition-colors">
                      +385 1 4877 777
                    </a>
                  </p>
                  <p>
                    <span className="font-bold text-amber-600">Radno vrijeme:</span> Pon-Pet: 10h-20h
                  </p>
                  <p>
                    <span className="font-bold text-amber-600">Online Podrška:</span>{" "}
                    <a
                      href="http://www.kockanje-pomoc.hr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-500 transition-colors underline"
                    >
                      www.kockanje-pomoc.hr
                    </a>
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-amber-500 mb-4">Specijalizirani resursi</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <a
                  href="https://www.hupis.hr/klok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-4 hover:bg-slate-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-amber-500 mb-2">HUPIS - KLOK</h3>
                  <p className="text-sm">
                    Hrvatski savez udruga psihijatriskih bolesnika - Kabinet za liječenje ovisnosti o kockanju
                  </p>
                </a>

                <a
                  href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-4 hover:bg-slate-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-amber-500 mb-2">PBSVI - KOCKA</h3>
                  <p className="text-sm">
                    Poliklinika za zaštitu djece i mladih - Program za liječenje ovisnosti o kockanju
                  </p>
                </a>
              </div>
            </section>

            <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-6 mt-8">
              <p className="text-amber-600 font-bold text-xl mb-2">18+</p>
              <p className="text-amber-600 font-semibold">
                Kockanje je zabava, ali može biti opasno. Igrajte odgovorno i nikada ne kockajte više nego što možete
                priuštiti izgubiti.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
