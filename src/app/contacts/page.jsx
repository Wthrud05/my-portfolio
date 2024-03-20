'use client'

import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

const text = 'Contact Me'
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

const ContactsPage = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log(result)
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setError(true)
          console.log(error)
        },
      )
  }

  return (
    <motion.div
      className="h-full"
      initial={{y: '-200vh'}}
      animate={{y: '0vh'}}
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/5 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl lg:text-6xl">
          <div>
            {text.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                transition={{duration: 3, repeat: Infinity, delay: i * 0.1}}
              >
                {letter}
              </motion.span>
            ))}
            🤙
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-5/6 lg:h-full lg:w-1/2 bg-violet-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-10 lg:p-24"
        >
          <span className="text-sm md:text-xl">Dear Alexander</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none focus:border-b-teal-500 transition-all"
            name="user_message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span className="text-sm md:text-xl">My mail adress is:</span>
          <input
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none focus:border-b-teal-500 transition-all"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="text-sm md:text-xl">Regards</span>
          <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            className="bg-purple-200 rounded-md font-semibold text-gray-600 p-2 lg:p-4 disabled:bg-gray-300"
            disabled={!(email.length > 5 && message.length > 5)}
          >
            Send
          </motion.button>
          {success && (
            <span className="text-green-600 font-semibold text-sm md:text-xl">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm md:text-xl">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactsPage
