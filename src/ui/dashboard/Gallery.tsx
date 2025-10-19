import React, { useEffect, useRef, useState } from 'react';
import Gambar from '@/assets/gallery/Pemandangan .jpg';
import GradientButton from '../shared/GradientButton';
import { useIntersection } from '@/hooks/useIntersection';


function Gallery() {  

  const {intersectingRef, Intersecting } = useIntersection({treshold : 0.1})

  return (
      <div className={`container mx-auto max-w-[1280px] px-4 transition-all duration-800 opacity-0 
        ${Intersecting ? 'opacity-100 translate-y-0' : 'transform translate-y-10'}`} 
        ref={intersectingRef}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Image with hover effect and frame */}
          <div 
            className="relative w-full max-w-[700px]"
          >
            <div className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-700 ease-in-out scale-100 hover-focus:scale-105`}>
              <img 
                src={Gambar} 
                alt="Beautiful Indonesian Landscape" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover-focus:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm font-light">Photo by: Nature Explorer</p>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="text flex flex-col justify-center lg:w-1/2 gap-6">
            <h2 className='text-5xl max-sd:text-4xl font-bold max-lg:text-center text-slate-900 font-playfair'>
              Gallery <i>Keindahan</i> Indonesia
            </h2>
            <p className='text-xl max-sd:text-lg font-light max-lg:text-center text-slate-700 leading-relaxed font-lato'>
              Jelajahi keindahan alam Indonesia yang memukau melalui koleksi foto eksklusif kami. Dari pantai berpasir putih di Bali hingga hutan hujan tropis di Sumatra, setiap gambar menceritakan kisah tentang keajaiban alam nusantara.
            </p>
            
            <div className="flex max-lg:justify-center">
              <button className='px-7 py-3 rounded-full border border-slate-300 text-slate-700 font-medium transition-all hover-focus:border-emerald-500 hover-focus:text-emerald-700 hover-focus:shadow-md'>
                Learn More
              </button>
            </div>
            
            <div className="flex max-lg:justify-center gap-6 mt-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="size-2 bg-slate-600 rounded-full"></div>
                <span>500+ Koleksi Foto</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 bg-slate-600 rounded-full"></div>
                <span>30+ Fotografer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Gallery;