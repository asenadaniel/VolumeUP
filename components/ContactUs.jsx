import React from 'react'
import Title from './Title'
import { A Check, Mail, User } from 'lucide-react'


function ContactUs() {
  return (
    <div id='contact-us' className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700">
      <Title title='Reach Out To Us' description='Get in touch with our team for partnerships, inquiries, or project collaborations.' />

      <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        <div>
          <p className=' mb-2 text-sm font-medium'>
            Your name
          </p>
          <div className=' flex pl-3 rounded-lg border border-gray-300 items-center'>
            <User />
            <input type="text" placeholder='Enter your name' className=' w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className=' mb-2 text-sm font-medium'>
            Email
          </p>
          <div className=' flex pl-3 rounded-lg border border-gray-300 items-center'>
            <Mail />
            <input type="email" placeholder='Enter your email' className=' w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div className=' sm:col-span-2'>
          <p className=' mb-2 text-sm font-medium'>
            Message
          </p>
          <textarea rows={9} placeholder='Enter your Message' className=' w-full p-3 text-sm outline-none rounded-lg border border-gray-300 ' />
        </div>
        <button type='submit' className=' w-max flex gap-3 bg-red-800 text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 font-bold transition-all duration-300 ease-in-out '>
        SUBMIT <Check/>
        </button>
      </form>

    </div>
  )
}

export default ContactUs
