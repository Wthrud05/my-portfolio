'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const variants = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    init: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  }

  return (
    <motion.div
      className="h-full"
      initial={{y: '-200vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 1}}
    >
      <div className="h-full  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-hidden">
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <motion.div
          variants={variants}
          initial="init"
          whileInView="animate"
          className="h-1/2 flex flex-col gap-8 justify-center lg:h-full lg:w-1/2"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold sm:text-4xl md:text-5xl text-left"
          >
            Hello my name is Alexander.
          </motion.h1>
          <motion.p variants={itemVariants} className="md:text-xl">
            I`m fontend developer with more than 2 years of development experience. I develop
            websites, applications and user interfaces. I also have experience working with the
            server side of web applications.
          </motion.p>
          <motion.div variants={itemVariants} className="flex gap-8 w-full">
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
            <Link
              download="cv"
              href="/cv.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                initial={{scale: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                className="p-2.5 rounded-lg ring-1 ring-black"
              >
                Download CV
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
