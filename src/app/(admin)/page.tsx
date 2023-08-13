"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HomeAdmin() {

  const router = useRouter()
  const handleBtn1 = () => {
    router.push('/dashboard')
  }

  return (
    <main >
      <div >
        <div>
          <button onClick={() => handleBtn1()}>Dash board</button>
        </div>
      </div>
    </main>
  )
}
