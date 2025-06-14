"use client";

import React from "react";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { Tabs } from "./ui/tabs";
import { CardSpotlight } from "./ui/card-spotlight";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";



const testimonialData = [
  {
    img: "/assets/img/testimonial/gym1.jpg",
    content:
      "Crafting a powerful identity that resonates, making your brand instantly recognizable & memorable. We help you define your unique voice & visual presence so you stand out in the marketplace.",
    title: "Branding",
  },
  {
    img: "/assets/img/testimonial/gym1.jpg",
    content:
      "Creating stunning visuals that capture attention & communicate your message with impact. From logos to marketing materials, our designs are your visual jutsu, ensuring a strong impression.",
    title: "Graphic Design",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Building robust, intuitive, and high-performing websites that serve as your digital stronghold. We create online experiences that engage and convert visitors into loyal customers.",
    title: "Web Development",
  },
  {
    img: "/assets/img/testimonial/gym2.jpg",
    content:
      "Providing strategic guidance and practical tools to optimize your operations, streamline processes, and unlock new avenues for growth, ensuring peak efficiency.",
    title: "Business Solutions",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Cultivating a thriving team environment and nurturing individual potential. We help you attract, develop, and retain top talent, fostering a strong Will of Fire within your organization.",
    title: "Talent Growth Partner (HR)",
  },
  {
    img: "/assets/img/testimonial/gym2.jpg",
    content:
      "Guiding your enterprise to new heights through expert analysis, strategic planning, & implementation support. We identify opportunities and overcome challenges for sustained success.",
    title: "Business Elevation Experts",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Offering personalized guidance and insights from industry veterans, empowering you to navigate complex business landscapes with confidence and clarity.",
    title: "Professional Mentorship",
  },
  {
    img: "/assets/img/testimonial/gym2.jpg",
    content:
      "Delivering inspiring and actionable presentations that ignite motivation and equip your team with the mindset for success and sustained achievement.",
    title: "Empowerment Talks",
  },
  {
    img: "/assets/img/testimonial/gym3.jpg",
    content:
      "Providing individualized support to help leaders and teams unlock personal potential, overcome obstacles, and achieve work-life balance for peak performance.",
    title: "Life Coach",
  },
  ];

const WhatWeDo = () => {
  return (
    
<section id="whatWeDo" className="py-12">
    <div className="container mx-auto flex flex-col items-center gap-6 mb-4">
          
        <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center"
          >
            WHAT WE DO
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[900px] mx-auto text-center text-lg"
          >
            We're a team of skilled "shinobi" dedicated to bringing your vision to life and accelerating your growth. 
            Our comprehensive suite of services is designed to tackle every challenge, from establishing your identity to nurturing your team.
          </motion.p>
      </div>

  
    <div className="xl:py-3 h-full container mx-auto flex flex-col">
{/*         <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center"
        >
          Services
        </motion.h2> */}

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-accent2"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="h-[420px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <div className="flex flex-col justify-center items-center gap text-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-2xl font-semibold max-w-[380px) mb-8">{person.title}</p>
                      <span className="text-xl font-bold text-white">
                      <CardSpotlight>
                            <p className="relative z-20 mt-2">{person.content}</p>
                      </CardSpotlight>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
{/*           <SwiperNavButton
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            /> */}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
