import Image from 'next/image'
import React, {useState} from 'react'
import {motion} from 'framer-motion'

const Slider = ({images}) => {
  const [imageCount, setImageCount] = useState(0)

  const forwardHandler = () => {
    imageCount >= images.length - 1 ? setImageCount(0) : setImageCount((prev) => prev + 1)
  }

  const backwardHandler = () => {
    imageCount === 0 ? setImageCount(images.length - 1) : setImageCount((prev) => prev - 1)
  }

  return (
    <>
      <div className="w-[350px] h-48 md:w-96 md:h-56 lg:w-[500px] lg:h-[270px] xl:w-[720px] xl:h-[380px] overflow-hidden relative">
        <div
          style={{
            transform: `translateX(-${(imageCount / images.length) * 100}%)`,
            width: `${images.length}00%`,
          }}
          className={`flex h-full transition-all duration-500 ease-in-out`}
        >
          {images.map((img) => (
            <div key={img} className="relative w-full h-full">
              <Image src={img} alt={img} fill sizes="" className="rounded" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <motion.button
          onClick={backwardHandler}
          className="text-black bg-black/10 rounded-sm hover:bg-black hover:text-white transition-all duration-100"
          whileTap={{scale: 0.9}}
        >
          <svg
            fill="none"
            height="30"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>
        <motion.button
          className="text-black bg-black/10 rounded-sm hover:bg-black hover:text-white transition-all duration-100"
          onClick={forwardHandler}
          whileTap={{scale: 0.9}}
        >
          <svg
            fill="none"
            height="30"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.button>
      </div>
    </>
  )
}

export default Slider
