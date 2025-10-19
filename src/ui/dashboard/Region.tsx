import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper.css";
import {
  pemandangan,
  pemandangan2,
  pemandangan3,
} from "@/assets";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useIntersection } from "@/hooks/useIntersection";

function Region() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const {Intersecting, intersectingRef} = useIntersection({treshold: 0.2});

  const carousel = [
    {
      nama: "Gunung Bromo",
      image: pemandangan,
      desc: "Keajaiban alam Jawa Timur dengan lautan pasir yang luas dan matahari terbit yang menakjubkan. Tempat di mana budaya Tengger berpadu dengan pesona alam yang tiada duanya."
    },
    {
      nama: "Pantai Bali",
      image: pemandangan2,
      desc: "Pulau Dewata dengan pantai berpasir putih, ombak yang menantang, dan budaya Hindu yang kental. Surga tropis yang menjadi ikon pariwisata Indonesia."
    },
    {
      nama: "Pantai Lombok",
      image: pemandangan3,
      desc: "Keindahan alami yang masih asri dengan pantai jernih, pasir putih merica, dan suasana tenang. Lombok menawarkan ketenangan sekaligus petualangan bahari."
    },
  ]

  const arrays = [...carousel, ...carousel]

  return (
    <section className={`mb-96 py-10 transform transition-all duration-900 ${Intersecting ? "opacity-100  translate-y-0" : "opacity-0 translate-y-10"} `} ref={intersectingRef}>
      <h2 className="font-playfair mb-4 text-center text-4xl font-bold text-content">
        The Beauty of Our <i>Regions</i>
      </h2>

      <div className="flex justify-between">
        {/* Buttons */}
        <button   
          onClick={() => swiper?.slidePrev()}
          className="flex justify-center items-center mb-20"
        >
          <ChevronLeftIcon className="text-primary transition duration-300 hover:text-accent size-16"/>
        </button>   
        <Swiper
          className="grow"
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: true,
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<button class="${className} size-4 rounded-full flex justify-center items-center border border-[#8B5E3C] cursor-pointer overflow-hidden"></button>`;
            },
          }}
          modules={[Navigation, Autoplay, Pagination]}
          onSwiper={setSwiper}
          breakpoints={{
            1280: {
              slidesPerView: 3,
            },
            960: {
              slidesPerView: 2,
            },
            320 : {
              slidesPerView: 1,
            }
          }}
        >
          {arrays.map((carousels, key) => (
            <SwiperSlide key={key} className="">
              <div className="flex flex-col gap-4">
                <img
                  src={carousels.image}
                  className=" lg:h-[490px] h-72 mx-auto rounded-2xl object-cover shadow-lg"
                />
                <h1 className="font-playfair text-content font-bold text-2xl">{carousels.nama}</h1>
                <p className="font-lato font-light text-content/80 text-ellipsis line-clamp-2 ">{carousels.desc}</p>
                <button className="border border-primary rounded text-primary/80 w-32">Test</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
        onClick={() => swiper?.slideNext()}
        className="rotate-180 flex justify-center items-center mb-20"
        >
        <ChevronLeftIcon className="text-primary transition duration-300 hover:text-accent size-16"/>
        </button>
      </div>

      {/* Pagination */}
      <div className="custom-pagination my-6 flex justify-center gap-2" />
    </section>
  );
}

export default Region;
