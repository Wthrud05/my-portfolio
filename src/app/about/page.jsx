'use client'

import React, {useRef} from 'react'
import {motion, useInView, useScroll} from 'framer-motion'
import Gears from '@/components/gears'
import {skills, projects} from '@/data'

export default function AboutPage() {
  const containerRef = useRef()
  const {scrollYProgress} = useScroll({container: containerRef})

  const skillRef = useRef()
  const isSkillInView = useInView(skillRef, {margin: '100px'})

  const experienceRef = useRef()
  const isExperienceInView = useInView(experienceRef, {margin: '100px'})

  return (
    <motion.div
      className="h-full"
      initial={{y: '-200vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 1}}
    >
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Biography</h1>
            <p className="text-lg">
              I'm a frontend developer. I am well versed in the language JavaScript and related
              technologies. Daily I improve my knowledge and skills in language capabilities and
              frameworks, and I also develop pet projects. I can work in a team and how independent
              unit navigate through the documentation and study new technologies. In free time from
              work and study I'm studying English language, sports and reading fiction.
            </p>
            <span className="italic">
              I'm trying to find an interesting and I want a promising job develop professionally.
              I'm looking for a job to start your career in IT.
            </span>
            <motion.svg
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: '10px'}}
              transition={{repeat: Infinity, duration: 2, ease: 'easeInOut'}}
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
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{x: '-300px', opacity: 0}}
              animate={isSkillInView ? {x: 0, opacity: 1} : {}}
              transition={{delay: 0.5}}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            <motion.div
              initial={{x: '-300px', opacity: 0}}
              animate={isSkillInView ? {x: 0, opacity: 1} : {}}
              transition={{delay: 0.2}}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((s) => (
                <div
                  key={s}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {s}
                </div>
              ))}
            </motion.div>
            <motion.svg
              initial={{opacity: 0.2, y: 0}}
              animate={{opacity: 1, y: '10px'}}
              transition={{repeat: Infinity, duration: 2, ease: 'easeInOut'}}
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
          <div className="flex flex-col justify-center gap-12 pb-48" ref={experienceRef}>
            <motion.h1
              initial={{x: '-300px', opacity: 0}}
              animate={isExperienceInView ? {x: 0, opacity: 1} : {}}
              transition={{delay: 0.5}}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            <motion.div
              initial={{x: '-300px', opacity: 0}}
              animate={isExperienceInView ? {x: 0, opacity: 1} : {}}
              transition={{delay: 0.2}}
            >
              {projects.map((e) => (
                <div className="" key={e.name}>
                  {e.id % 2 !== 0 ? (
                    <div className="flex justify-between">
                      <div className="w-1/3 flex flex-col gap-2">
                        <div className="text-xl font-semibold rounded-b-lg rounded-s-lg bg-white p-3">
                          {e.name}
                        </div>
                        <div className="italic text-lg p-3">{e.description}</div>
                        <div className="flex flex-wrap">
                          {e.stack.map((item) => (
                            <div key={item} className="p-3 text-rose-700 font-semibold">
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="text-base font-bold p-1 px-3 bg-white w-fit rounded-md">
                          {e.year}
                        </div>
                      </div>
                      <div className="w-1/6">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 -translate-x-1/2"></div>
                        </div>
                      </div>
                      <div className="w-1/3"></div>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <div className="w-1/3"></div>
                      <div className="w-1/6">
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 -translate-x-1/2"></div>
                        </div>
                      </div>
                      <div className="w-1/3 flex flex-col gap-2">
                        <div className="text-xl break-words whitespace-break-spaces font-semibold rounded-b-lg rounded-e-lg bg-white p-3">
                          {e.name}
                        </div>
                        <div className="italic text-lg p-3">{e.description}</div>
                        <div className="flex flex-wrap">
                          {e.stack.map((item) => (
                            <div key={item} className="p-3 text-rose-700 font-semibold">
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="text-base font-bold p-1 px-3 bg-white w-fit rounded-md">
                          {e.year}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-10   z-30 xl:w-1/2">
          <Gears scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}
