import assets from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div id='hero' className=' flex flex-col items-center gap-6 py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700'>

      <div className=' inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <Image
          src={assets.group_profile} width={30} height={30} alt='group' />
        <p className=' text-xs font-medium'>Trusted by people</p>
      </div>

      <h1 className='max-w-3xl mx-auto'> <span className=' font-extrabold'>Volume Up Dot Com Limited</span> is a Nigerian experiential <span className=' font-semibold text-[#72120e]'>Marketing</span>, <span className=' font-semibold  text-[#72120e]'>Media</span> and <span className=' font-semibold  text-[#72120e]'>Logistics</span> consulting firm. We deploy strategic solutions that help brands extract value and build market leadership.</h1>

      <div>
        <img src="/VolumeUPhero.jpg" alt="" className='max-w-6xl w-full ' />
        <div className=' relative'>
          <Image src="/volume.jpg" alt="VolumeUpDotCom Logo" width={50} height={50} className=' absolute bottom-1' />
          <p className=' absolute bottom-2 left-16 text-xs font-semibold text-[#72120e] italic'>VolumeUP</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-2'>
        <p className=' text-gray-500 italic w-72 md:w-96 lg:w-[600px]'>
          "A Brand is not so much about rational arguments, but the way the company resonates with the people emotionally. <span className='text-[#72120e] font-semibold'>MARKETING IS ABOUT VALUES</span>"
        </p>
        <p className=' text-gray-500 italic w-72 md:w-96 lg:w-[600px]'>
          "Creativity is intelligence having fun"
        </p>
      </div>
    </div>
  )
}

export default Hero

