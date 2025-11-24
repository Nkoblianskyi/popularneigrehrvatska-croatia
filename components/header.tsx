import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky bg-card border-b-2 border-primary top-0 z-50 w-full shadow-lg shadow-black/50">
      <div className="container mx-auto max-w-[1220px] px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex justify-center items-center gap-3">
            <Image src="/favicon.ico" alt="Popularne Igre Hrvatska Logo" width={56} height={44} className="" />
          </Link>
        </div>

      </div>
    </header>
  )
}
