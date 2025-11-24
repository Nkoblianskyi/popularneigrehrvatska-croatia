import Image from "next/image"

export function Hero() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("hr-HR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section className="w-full h-[280px] md:h-[380px] relative overflow-hidden border-b-2 border-primary">
      <div className="absolute inset-0">
        <img
          src="/poker-table-hero.jpg"
          alt="Vrhunski casino pokerni stol"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/85"></div>
      </div>

      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center items-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            <span className="text-primary">POPULARNE IGRE</span> <span className="text-foreground">HRVATSKA</span>
          </h1>

          <div className="text-primary text-sm md:text-base font-semibold mb-3 md:mb-4">Ažurirano: {formattedDate}</div>

          <p className="hidden md:block text-base text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
            Ekskluzivni vodič za najpopularnije i najpouzdanije online kazino platforme u Hrvatskoj
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm flex-wrap">
            <div className="flex items-center gap-2">
              <Image src="/flag.png" alt="Licencirano" width={16} height={16} />
              <span className="text-foreground font-medium whitespace-nowrap">Licencirano</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-background text-[11px] font-bold">✓</span>
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">Provjereno</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-background text-[11px] font-bold">✓</span>
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">Sigurno</span>
            </div>

            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-primary/50 flex-shrink-0">
              <span className="text-primary font-bold text-sm">18+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
