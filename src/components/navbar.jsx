'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './navLink'
import {motion} from 'framer-motion'
import {links, socials} from '@/data'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },

    open: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  }

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    open: {
      opacity: 0,
    },
  }
  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    open: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  }

  const listVariants = {
    closed: {
      x: '100vw',
    },
    open: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  }

  const listItemVariants = {
    closed: {
      y: 0,
      opacity: 0,
      scale: 1,
    },
    open: {
      y: -10,
      opacity: 1,
    },
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <motion.div initial={{scale: 1}} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
          <Link
            className="text-sm border-2 border-black border-w rounded-md p-1 font-semibold flex items-center justify-center"
            href="/"
          >
            <span className="text-black mr-1">Alexander</span>
            <span className="w-12 h-8 bg-black text-white flex items-center justify-center rounded">
              .dev
            </span>
          </Link>
        </motion.div>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        {socials.map((s, i) => (
          <motion.div
            key={i}
            initial={{scale: 1}}
            whileHover={{scale: 1.2}}
            whileTap={{scale: 0.95}}
          >
            <Link href={s.href} target="_blank">
              <Image src={s.icon} alt={s.alt} width={24} height={24} />
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-7 h-6 flex flex-col justify-between z-[60] relative"
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'open' : 'closed'}
            className="w-7 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'open' : 'closed'}
            className="w-7 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'open' : 'closed'}
            className="w-7 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="open"
            className="absolute left-0 top-0 bottom-0 right-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-50"
          >
            {links.map((link) => (
              <motion.div
                key={link.title}
                className=""
                variants={listItemVariants}
                whileHover={{scale: 1.15}}
                whileTap={{scale: 0.95}}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
