'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <motion.div
      className="h-full"
      initial={{y: '-200vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 1}}
    >
      <div className=" h-full  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="h-1/2 flex flex-col gap-8 justify-center lg:h-full lg:w-1/2">
          <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl text-left">
            Hello my name is Alexander.
          </h1>
          <p className="md:text-xl">
            I`m fontend developer with more than 2 years of development experience. I develop
            websites, applications and user interfaces. I also have experience working with the
            server side of web applications.
          </p>
          <div className="flex gap-8 w-full">
            <Link href="/projects">
              <motion.button
                initial={{scale: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                className="p-2.5 rounded-lg ring-1 ring-black bg-black text-white"
              >
                View My Works
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                initial={{scale: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                className="p-2.5 rounded-lg ring-1 ring-black"
              >
                Download CV
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
