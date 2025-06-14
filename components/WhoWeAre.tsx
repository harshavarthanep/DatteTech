"use client";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section
      id="whoWeAre"
      className="relative bg-primary-200 text-white py-12"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* WHO WE ARE Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-accent"
          >
            WHO WE ARE
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-base md:text-lg lg:text-xl text-white text-center lg:text-left leading-relaxed"
          >
            We are a collective of passionate innovators, strategists, and problem-solvers, united by a shared vision: to see your business thrive. 
            Each member of the DatteTech team is an expert in their field, dedicated to understanding your unique needs and delivering exceptional results. 
            We operate with the agility and precision of a ninja squad, always ready to adapt and overcome.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 opacity-50 my-12 lg:my-16"></div>

        {/* OUR JOURNEY Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.h2
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-accent"
          >
            OUR JOURNEY
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-base md:text-lg lg:text-xl text-white text-center lg:text-left leading-relaxed"
          >
            DatteTech began with a simple belief that every business, regardless of size, deserves access to top-tier expertise to achieve its full potential. 
            We started as a small team with a big dream, much like a young ninja embarking on their path. Through dedication, continuous learning, and a relentless commitment to our clients, we've grown, honing our skills and expanding our capabilities. 
            Our journey is one of constant evolution, driven by the success stories of the businesses we serve.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
