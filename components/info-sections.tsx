export function InfoSections() {
  return (
    <section className="py-12 px-4 w-full">
      <div className="container mx-auto max-w-[1220px]">
        <div className="bg-card border-2 border-primary/30 rounded-lg shadow-2xl">
          <div className="p-8 space-y-16">
            <div className="text-center">
              <div className="croatia-accent-line w-32 mx-auto mb-8 rounded-full"></div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                <span className="text-primary">Naša</span> <span className="text-foreground">Metodologija</span>
              </h3>
              <p className="text-muted-foreground text-xl mb-12 max-w-4xl mx-auto">
                Svaki kazino prolazi kroz strogi proces vrednovanja kako bismo osigurali samo najbolje preporuke za
                hrvatske igrače.
              </p>

              <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="border-2 border-primary/50 rounded-lg p-6 text-center bg-secondary hover:bg-secondary/70 transition-all">
                  <div className="text-3xl font-bold text-primary mb-3">35%</div>
                  <h4 className="text-foreground font-bold mb-3">Sigurnost</h4>
                  <p className="text-muted-foreground text-sm">Licenciranje, enkripcija i zaštita igrača</p>
                </div>

                <div className="border-2 border-primary/50 rounded-lg p-6 text-center bg-secondary hover:bg-secondary/70 transition-all">
                  <div className="text-3xl font-bold text-primary mb-3">25%</div>
                  <h4 className="text-foreground font-bold mb-3">Igre</h4>
                  <p className="text-muted-foreground text-sm">Izbor, kvaliteta i vrhunski provajderi</p>
                </div>

                <div className="border-2 border-primary/50 rounded-lg p-6 text-center bg-secondary hover:bg-secondary/70 transition-all">
                  <div className="text-3xl font-bold text-primary mb-3">25%</div>
                  <h4 className="text-foreground font-bold mb-3">Bonusi</h4>
                  <p className="text-muted-foreground text-sm">Vrijednost, pošteni uvjeti i transparentnost</p>
                </div>

                <div className="border-2 border-primary/50 rounded-lg p-6 text-center bg-secondary hover:bg-secondary/70 transition-all">
                  <div className="text-3xl font-bold text-primary mb-3">15%</div>
                  <h4 className="text-foreground font-bold mb-3">Podrška</h4>
                  <p className="text-muted-foreground text-sm">Korisnička usluga i brzina isplata</p>
                </div>
              </div>

              <div className="mt-12 border-2 border-primary/30 rounded-lg p-8 max-w-4xl mx-auto bg-secondary">
                <h4 className="text-2xl font-bold text-primary mb-4">100% Neovisne Ocjene</h4>
                <p className="text-foreground text-lg">
                  Naš tim testira svaki kazino s pravim novcem. Sve ocjene se ažuriraju mjesečno kako bismo osigurali
                  najnovije i najtočnije informacije za hrvatske igrače.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="croatia-accent-line w-32 mx-auto mb-8 rounded-full"></div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                <span className="text-primary">Odgovorno</span> <span className="text-foreground">Kockanje</span>
              </h3>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="border-2 border-primary/30 rounded-lg p-8 bg-secondary">
                  <h4 className="text-primary font-bold text-2xl mb-4">Kockanje treba biti zabava</h4>
                  <p className="text-foreground text-lg mb-6">
                    Online kazino igre su namijenjene isključivo za zabavu. Nikada ne igrajte s novcem koji ne možete
                    priuštiti izgubiti.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div>
                      <h5 className="text-primary font-bold mb-3">Zdravo Kockanje:</h5>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>✓ Postavite dnevne limite novca</li>
                        <li>✓ Igrajte samo radi zabave</li>
                        <li>✓ Poštujete svoje limite</li>
                        <li>✓ Nikada ne jurite gubitke</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-primary font-bold mb-3">Znakovi Problema:</h5>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>✗ Igrate duže nego planirano</li>
                        <li>✗ Lažete obitelji o gubicima</li>
                        <li>✗ Zanemarujete druge obveze</li>
                        <li>✗ Osjećate anksioznost</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-primary/30 rounded-lg p-8 bg-secondary">
                  <h4 className="text-primary font-bold text-2xl mb-6">Gdje Potražiti Pomoć</h4>
                  <div className="space-y-6">
                    <div className="text-center">
                      <h5 className="font-bold text-foreground mb-3">Hrvatski Resursi</h5>
                      <div className="flex flex-wrap justify-center gap-3">
                        <a
                          href="https://www.hupis.hr/klok"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-background rounded-md hover:bg-primary/10 transition-colors border border-primary text-foreground font-medium text-sm"
                        >
                          HUPIS - Hrvatska Prevencija
                        </a>
                        <a
                          href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-background rounded-md hover:bg-primary/10 transition-colors border border-primary text-foreground font-medium text-sm"
                        >
                          PBSVI - Terapija Ovisnosti
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-primary rounded-lg p-6 text-center bg-secondary">
                  <p className="text-primary font-bold text-2xl mb-2">ZABRANJEN PRISTUP MALOLJETNICIMA</p>
                  <p className="text-foreground text-lg">Samo za osobe starije od 18 godina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
