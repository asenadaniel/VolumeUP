import React from 'react'
import Title from './Title';
import { Tv, Video, Briefcase, Calendar, ClipboardList, FileText } from "lucide-react";
import ServiceCard from './ServiceCard';
import GrowthStrategy from './GrowthStrategy';

function Services() {

  const services = [
    { title: "TV and Radio", icon: <Tv className="w-10 h-10 text-[#72120e]" /> },
    { title: "Content Production", icon: <Video className="w-10 h-10 text-[#72120e]" /> },
    { title: "Marketing Management", icon: <Briefcase className="w-10 h-10 text-[#72120e]" /> },
    { title: "Events", icon: <Calendar className="w-10 h-10 text-[#72120e]" /> },
    { title: "Projects", icon: <ClipboardList className="w-10 h-10 text-[#72120e]" /> },
    { title: "Content Development", icon: <FileText className="w-10 h-10 text-[#72120e]" /> },
  ];

  return (
    <div id='services' className=' relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-28 text-gray-700'>
      <Title
        title="Our Services"
        description="From strategy to execution, we craft experiential marketing and media solutions that move your brand forward."
      />

      <div className=' flex flex-col md:grid grid-cols-2'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <div className='max-w-3xl mx-auto flex flex-col gap-4 mt-10'>

        <h3 className='text-[#72120e] font-bold'>WE ENGAGE ALL FORMS OF MEDIA
        </h3>
        <p>
          Our key objective is to promote brands, build preference and increase sales through various online marketing techniques. We believe the 21st century is fuelled by a digital revolution gradually obsoleting traditional media. Our experience combines traditional and new media to build brand visibility and increased following.
        </p>
        <h3 className='text-[#72120e] font-bold'>BRAND ACTIVATION
        </h3>
        <p>
          The accuracy of brand activation is largely enhanced by creative concepts matching adequate customer profiling. It is the seamless integration of all available communication means in a creative platform in order to activate customers. We continuously deliver the major objectives of brand activation, which are to stimulate customer interest, product trial and customer loyalty.

        </p>

        <GrowthStrategy />
      </div>
    </div>
  )
}

export default Services
