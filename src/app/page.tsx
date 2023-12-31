import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Teste</h1>

      <Link href="/teste">
        Para Projeto JS
      </Link>
      <Link href="/dashServicos/servicosHome">
        Para Projeto JS
      </Link>
      <Link href="/outro">
        Outro
      </Link>
    </main>
  )
}
