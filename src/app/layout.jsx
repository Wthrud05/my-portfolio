import {Rubik} from 'next/font/google'
import './globals.css'
import TransitionProvider from '@/components/transitionProvider'

const rubik = Rubik({subsets: ['latin']})

export const metadata = {
  title: 'Next.js portfolio App',
  description: 'My animated portfolio',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
