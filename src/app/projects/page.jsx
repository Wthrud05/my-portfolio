'use client'

import React, {useRef} from 'react'
import {AnimatePresence, motion, useScroll, useTransform} from 'framer-motion'
import {projects} from '@/data'
import Link from 'next/link'
import Slider from '@/components/slider'

const ProjectsPage = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref})
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <AnimatePresence>
      <motion.div
        className="h-full"
        initial={{y: '-200vh'}}
        animate={{y: '0vh'}}
        transition={{duration: 1}}
      >
        <div className="h-[600vh] relative" ref={ref}>
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center flex-col relative gap-32">
            <h1 className="text-8xl text-center">My Works</h1>
            <motion.svg
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: '10px'}}
              transition={{repeat: Infinity, duration: 2, ease: 'easeInOut'}}
              className=""
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div
              style={{x}}
              className="flex bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300"
            >
              <div className="h-screen w-screen flex items-center justify-center " />
              {projects.map((p) => (
                <motion.div
                  initial={{scale: 0, opacity: 0}}
                  whileInView={{scale: 1, opacity: 1}}
                  transition={{duration: 0.3}}
                  key={p.name}
                  className={`h-screen w-screen flex items-center justify-center`}
                >
                  <div className="flex flex-col gap-5 text-white relative">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                      {p.name}
                    </h1>
                    <Slider images={p.images} />
                    <p className="text-white font-semibold w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {p.description}
                    </p>
                    <Link
                      href={p.link}
                      target="_blank"
                      className="bg-gray-900 w-32 text-white text-center rounded-md hover:scale-110 active:scale-95 transition-all"
                    >
                      <motion.button className="p-2 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg">
                        See Demo
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
          <h1 className="text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
              animate={{rotate: 360}}
              transition={{duration: 8, ease: 'linear', repeat: Infinity}}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-lg">
                  Front-end Developer and Back-end Developer
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectsPage
