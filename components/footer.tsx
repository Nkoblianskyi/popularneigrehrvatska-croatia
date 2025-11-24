import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t-2 border-primary/30 py-8 w-full">
      <div className="container mx-auto max-w-[1220px] px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden space-y-6">
          <div className="text-center">
            <Link href="/" className="flex justify-center items-center gap-2">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="" />
              <h1 className="text-sm sm:text-lg font-bold pt-2">
                <span className="text-primary uppercase">Popularne Igre Hrvatska</span>
              </h1>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-2 border-primary/70 shadow-lg shadow-primary/20">
              <span className="text-background font-bold text-sm">18+</span>
            </div>
            <div className="text-muted-foreground text-sm text-center">
              <p className="text-primary font-bold">Odgovorno kockanje</p>
              <p>Zabranjeno maloljetnicima</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground text-sm">
              <Link href="/politika-privatnosti" className="hover:text-primary transition-colors">
                Privatnost
              </Link>
              <Link href="/politika-kolacica" className="hover:text-primary transition-colors">
                Kolačići
              </Link>
              <Link href="/o-nama" className="hover:text-primary transition-colors">
                O Nama
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:justify-between md:items-center">
          <div>
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4 group">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
                <span className="text-primary uppercase">Popularne Igre Hrvatska</span>
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <Link href="/politika-privatnosti" className="hover:text-primary transition-colors">
              Politika Privatnosti
            </Link>
            <Link href="/politika-kolacica" className="hover:text-primary transition-colors">
              Politika Kolačića
            </Link>
            <Link href="/o-nama" className="hover:text-primary transition-colors">
              O Nama
            </Link>
          </div>

          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center border-2 border-primary/70 shadow-lg shadow-primary/20">
            <span className="text-background font-bold text-sm">18+</span>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="font-bold text-lg text-primary mb-2 flex items-center justify-center gap-2">
              Odgovorno Kockanje
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary backdrop-blur-sm p-3 rounded-md hover:bg-secondary/70 transition-all border border-border hover:border-primary flex items-center justify-center group"
            >
              <Image
                src="/gamble-aware.webp"
                alt="GambleAware"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary backdrop-blur-sm p-3 rounded-md hover:bg-secondary/70 transition-all border border-border hover:border-primary flex items-center justify-center group"
            >
              <Image
                src="/hupis.jpg"
                alt="HUPIS"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary backdrop-blur-sm p-3 rounded-md hover:bg-secondary/70 transition-all border border-border hover:border-primary flex items-center justify-center group"
            >
              <Image
                src="/pbsvi.jpg"
                alt="PBSVI"
                width={100}
                height={40}
                className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary backdrop-blur-sm p-3 rounded-md hover:bg-secondary/70 transition-all border border-border hover:border-primary flex items-center justify-center group"
            >
              <Image
                src="/gamstop.jpg"
                alt="GamStop"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary backdrop-blur-sm p-3 rounded-md hover:bg-secondary/70 transition-all border border-border hover:border-primary flex items-center justify-center group"
            >
              <Image
                src="/gamecare-new.jpg"
                alt="GamCare"
                width={120}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
          <p className="text-foreground font-semibold">&copy; 2025 popularneigrehrvatska.com</p>
          <p className="mt-2">Vaš pouzdani vodič za najbolje online kazino iskustvo u Hrvatskoj</p>
          <p className="mt-2 text-primary font-bold">
            Samo za osobe starije od 18 godina - Kockanje može izazvati ovisnost
          </p>
        </div>
      </div>
    </footer>
  )
}
