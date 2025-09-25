'use client'
import React from 'react'
import Title from './Title'
import { Check, Mail, User } from 'lucide-react'
import { motion } from "motion/react"
import toast from 'react-hot-toast'


function ContactUs() {


  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "f716ae62-9689-406b-a00e-a414774e9e3e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank You For Your Submission')
        event.target.reset();
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }


  return (
    <motion.div

      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}

      id='contact-us' className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700">
      <Title title='Reach Out To Us' description='Get in touch with our team for partnerships, inquiries, or project collaborations.' />

      <motion.form onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}

        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        <div>
          <p className=' mb-2 text-sm font-medium'>
            Your name
          </p>
          <div className=' flex pl-3 rounded-lg border border-gray-300 items-center'>
            <User />
            <input type="text" name='name' placeholder='Enter your name' className=' w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className=' mb-2 text-sm font-medium'>
            Email
          </p>
          <div className=' flex pl-3 rounded-lg border border-gray-300 items-center'>
            <Mail />
            <input type="email" name='email' placeholder='Enter your email' className=' w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div className=' sm:col-span-2'>
          <p className=' mb-2 text-sm font-medium'>
            Message
          </p>
          <textarea rows={9} name='message' placeholder='Enter your Message' className=' w-full p-3 text-sm outline-none rounded-lg border border-gray-300 ' required />
        </div>
        <button type='submit' className=' w-max flex gap-3 bg-red-800 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 font-bold transition-all duration-300 ease-in-out '>
          SUBMIT <Check />
        </button>
      </motion.form>

    </motion.div>
  )
}

export default ContactUs
