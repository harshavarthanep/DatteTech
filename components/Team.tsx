"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";

const trainerData = [
  {
    image: "/assets/img/trainers/Harsha11.jpg",
    name: "Harsha Varthan E P",
    role: "Founder & CEO",
    description: 
      "A true tech polymath and passionate entrepreneur, Harsha has a deep-seated love for transforming ideas into reality. As the force behind H24 Creationz and the author of two organically successful books (500+ copies sold in 7 months), he's built an impressive portfolio: over 6 apps and 2 games on Play Store, 10+ websites, 5+ branding projects, 4+ YouTube channels, 5+ music albums across major platforms, and a self-published podcast. Harsha's vast hands-on experience, including navigating numerous challenges and failures, uniquely positions him to guide aspiring individuals and businesses. He excels at providing strategic insights and building brands from the ground up, making him an invaluable ally for anyone looking to grow in the tech landscape.",
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Vidhya V",
    role: "Founder & Head of Talent Growth",
    description: "Vidhya brings extensive expertise in Human Resources and career guidance to DatteTech. With a proven track record of conducting numerous impactful career guidance sessions in colleges, she understands the nuances of talent development and acquisition. Vidhya is dedicated to helping businesses build strong teams by providing comprehensive HR services, from strategic hiring to fostering a thriving workplace culture. Her insights are crucial in ensuring DatteTech's clients can attract, retain, and develop the right talent to achieve their goals.",
  },
];

const Team = () => {
  return (
    <section
      className="py-8 md:py-12 h-auto bg-primary-200 text-white"
      id="team"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl md:text-4xl font-bold text-center mb-6"
        >
          Leaders
        </motion.h2>

        {/* trainers grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-row flex-wrap justify-center gap-8 md:gap-12"
        >
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[250px] h-[280px] sm:w-[300px] sm:h-[330px] lg:w-[350px] lg:h-[390px] mx-auto mb-4">
                  <Image
                    src={trainer.image}
                    fill
                    alt={trainer.name}
                    className="rounded-lg object-cover"
                  />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  {trainer.name}
                </h4>
                <p className="uppercase text-xs md:text-sm tracking-[2px] md:tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                <p className="text-sm md:text-base max-w-[280px] md:max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;


// if more trainers are there then
//           className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12 w-full"

