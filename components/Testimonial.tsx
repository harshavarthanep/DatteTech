"use client";

import "swiper/css";
import "swiper/css/pagination";

// testimonial data

const testimonialData = [
  {
    img: "/assets/img/testimonial/review1.png",
    message:
      "DatteTech truly transformed our online presence! Their web development team delivered a site that not only looks incredible but also brings in more leads than ever before. It's like they unlocked a new level of success for us!",
    name: "Rahul Raj",
  },
  {
    img: "/assets/img/testimonial/review2.png",
    message:
      "The branding process with DatteTech was a game-changer. They captured our essence perfectly, and our new brand identity has given us incredible confidence in the market. Highly recommend their 'visual jutsu'!",
    name: "Dhanashree Rajesh",
  },
  {
    img: "/assets/img/testimonial/review3.png",
    message:
      "As a startup, we needed comprehensive support, and DatteTech delivered. Their Business Solutions and Talent Growth expertise helped us build a strong foundation and scale effectively. They're true partners!",
    name: "Vimal Kumar",
  },
  {
    img: "/assets/img/testimonial/review4.png",
    message:
      "I recently joined this unisex gym, nice experience here, they will teach us from scratch and trainers are good and super supportive persons",
    name: "Rajasri Gunasekharan ",
  },
  // {
  //   img: "/assets/img/testimonial/gym2.jpg",
  //   message:
  //     "Happy with the packages which are in affordable manner. seems trainers also friendly and supportive.",
  //   name: "Shriya Raj",
  // },
  // {
  //   img: "/assets/img/testimonial/gym3.jpg",
  //   message:
  //     "I have recently joined here, the trainers are too friendly and they Guide the beginners very well.",
  //   name: "Praveen Kishore",
  // },
  // {
  //   img: "/assets/img/testimonial/lucy.jpg",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
  //   name: "Lucy Anthony",
  // },
  // {
  //   img: "/assets/img/testimonial/lucy.jpg",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
  //   name: "Lucy Anthony",
  // },
  // {
  //   img: "/assets/img/testimonial/lucy.jpg",
  //   message:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem corporis.",
  //   name: "Lucy Anthony",
  // },
];

import React from "react";
import { Tabs } from "./ui/tabs";
import { CardSpotlight } from "./ui/card-spotlight";
import SwiperNavButton from "./SwiperNavButton";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="py-12 xl:py-28 h-full bg-accent3" id="testimonial">
      <div className="container mx-auto flex flex-col gap">
        <motion.h2
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center text-accent2"
        >
          Our Testimonials
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
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
                    <Image
                      src={person.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full border-2 border-accent"
                    />
                    <div className="flex flex-col justify-center items-center">
                      <FaQuoteLeft className="text-2x1 text-gray-300" />
                      <p className="max-w-[380px) mb-4">{person.message}</p>
                      <span className="text-2xl text-accent">
                        {person.name}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
