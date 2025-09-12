'use client'
import React from "react";
import TeamCard from "./TeamCard";
import Title from "./Title";
import { motion } from "motion/react"


function Team() {
  const members = [
    {
      name: "Sampson Atuluku",
      role: "Team Manager",
      image: "/A.jpg",
      bio: "Graduate of Computer Science (UNIBEN) with 19+ years’ experience managing multinational and indigenous brands. He has worked with agencies like Towncriers, CRM, GDM, and Brandlife across FMCG, Tobacco, and Drinks industries.",
    },
    {
      name: "Esther Obasi",
      role: "Executive Director",
      image: "/B.jpg",
      bio: "Former First Bank staff with experience in finance, film, and experiential marketing. Her administrative expertise and strong knowledge of Eastern Nigeria have been vital to the company’s growth.",
    },
    {
      name: "David Aleshinloye",
      role: "Business Development Manager",
      image: "/C.jpg",
      bio: "Over 10 years’ experience in media, marketing, and advertising. Former Group Head of Operations at JWT LTC Group. Graduate of UI, and trained at the Institute of Management Sidney and Polytechnic West Sidney.",
    },
    {
      name: "Samuel Fagbemi",
      role: "Executive Director (Legrunners)",
      image: "/D.jpg",
      bio: "Advertising professional with 20+ years’ experience managing operations in agencies like Towncriers, CRM, and Maxxconnection. Led award-winning activations for brands such as Oando, Zikel Cosmetics, and BAT Brands.",
    },
    {
      name: "Ololade Fagbohunlu",
      role: "Project Director",
      image: "/E.jpg",
      bio: "Digital marketing expert with 10+ years’ experience working with BAT, MTN, Mobil, Nestle, and Diageo. Previously at Abelinis, Tequila, and an SA agency before joining Volume Up in 2019.",
    },
    {
      name: "Michael Adewoye",
      role: "Field General",
      image: "/F.jpg",
      bio: "Enterprising leader with 11+ years’ experience in FMCG and field activations. Worked with GDM, Emporium, and Voyance Marketing on brands like Cowbell, Maltina, Peak Milk, and BAT.",
    },
    {
      name: "Lanre Akangbe",
      role: "Field General",
      image: "/G.jpg",
      bio: "10+ years’ experience in trade marketing with Nitro 121, GDM, and EXP. Managed activations for Guinness, Frutta, and Bajaj. Known for his integrity and strong can-do spirit.",
    },
    {
      name: "Victor Allu",
      role: "HR Professional",
      image: "/H.jpg",
      bio: "Banking & Finance graduate, member of CIBN and CIPMN with 18+ years’ HR experience. Built HR structures for two marketing outfits and has PMP training.",
    },
  ];


  return (
    <motion.div

      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}

      id="team"
      className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 py-16 bg-gray-50"
    >
      <Title
        title="Voluminas"
        description="A passionate team of marketing and media experts committed to driving your brand’s success."
      />

      <motion.div

        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {members.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Team;

