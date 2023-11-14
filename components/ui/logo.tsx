import Image from 'next/image'
import Link from 'next/link'
import Logos from "@/public/images/logo.svg"

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="md:max-w-none mx-auto rounded" src={Logos} width={100} height="100" alt="Ticiwe" />
    </Link>
  )
}
