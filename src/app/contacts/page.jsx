'use client'

import {motion} from 'framer-motion'

export default function ContactsPage() {
  return (
    <motion.div
      className="h-full"
      initial={{y: '-200vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 1}}
    >
      <div className='h-full  flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"'>
        ContactsPage
      </div>
    </motion.div>
  )
}
