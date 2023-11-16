import Image from 'next/image'
import Link from 'next/link'
// import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-hidden">
     <div className='text-white'>
      <p>
       Pariatur ad et adipisicing in deserunt veniam. Aliqua cillum excepteur elit ut minim fugiat elit nulla nulla exercitation. Tempor adipisicing do culpa nulla quis enim reprehenderit fugiat pariatur deserunt. Consectetur dolor magna labore velit sit. Sit eiusmod velit est dolore exercitation et minim ipsum qui voluptate aliquip.
      </p>
       <br/>
      <Link href='/'>CLICK ME</Link>
     </div>
    </main>
  )
}
