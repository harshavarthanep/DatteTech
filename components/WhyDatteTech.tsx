"use client";

import React from "react";
import { Tabs } from "./ui/tabs";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { CardSpotlight } from "./ui/card-spotlight";

const WhyDap = () => {
  return (
    <section
      id="WhyDatteTech"
      className="relative lg:py-24 py-12 overflow-hidden bg-accent3"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-noise opacity-10"></div>

      <div className="container mx-auto relative z-10 px-4">
        {/* WHY DAP Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-accent2"
          >
            WHY DATTETECH
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-base md:text-lg lg:text-xl text-center lg:text-left leading-relaxed text-accent2"
          >
            Choosing a partner for your business growth is a critical decision. At DatteTech, we don't just offer services, we offer a partnership built on trust, transparency, and tangible results.
            <br /><br /> We bring deep industry expertise and a proven track record of success, backed by a team that genuinely cares about your objectives. 
            We believe in a collaborative approach, working closely with you to understand your challenges and craft tailored solutions that deliver real impact. 
            Our commitment to innovation means you're always equipped with the latest tools and strategies to stay ahead in a dynamic market.
            <br /><br /> Beyond our technical prowess, what truly sets us apart is our unwavering dedication to your success. 
            We're not just here to complete tasks, we're here to be your strategic ally, celebrating your wins and navigating challenges together. 
            With DatteTech, you gain more than a service provider – you gain a trusted extension of your team, committed to helping you reach your "Hokage" status.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-600 opacity-50 my-12 lg:my-16"></div>

        {/* VALUES Section */}
        <div className="flex flex-col items-center gap-6 bg-accent3">
          <motion.h2
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-accent2"
          >
            VALUES
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-5xl mx-auto text-base md:text-lg lg:text-xl text-center lg:text-left leading-relaxed grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12"
          >
            <CardSpotlight className="w-full md:w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                We embrace continuous learning and creativity, constantly seeking new and 
                effective ways to solve challenges and deliver cutting-edge solutions for our clients. 
                We stay agile to help you adapt.
              </p>
            </CardSpotlight>
            <CardSpotlight className="w-full md:w-96">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Your success is our primary mission. We listen intently, understand deeply, and 
                tailor our approach to meet your specific needs and exceed your expectations. 
                We're invested in your journey.
              </p>
            </CardSpotlight>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyDap;
