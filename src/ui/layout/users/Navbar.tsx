import React, { use, useEffect, useRef, useState } from "react";
import { pesonaLogo, pesonaLogoHitam } from "@/assets";

function Navbar ({onToggle}: {onToggle : () => void}) {

  const [navbarOpaque, setNavbarOpaque] = useState(false)
  const heroSectionRef = useRef<HTMLDivElement>(null)

  const options = {
    rootMargin : '0px 0px 0px 0px',
    treshold : 1
  } as const

  useEffect(() => {

    const observer = new IntersectionObserver(([entries]) => {
        setNavbarOpaque(!entries.isIntersecting) 
    }, options)

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current)
    }

    return () => {
      observer.disconnect()
    }

  }, [])

  return (
    <>
    <div ref={heroSectionRef} className="absolute top-0 md:h-24 py-8 md:py-16 bg-red-500 w-full" />
      <header className={`${navbarOpaque ? 'fixed bg-[#F9F5F0] !text-black font-light py-5 md:py-9 drop-shadow-md' : 'absolute font-light py-8 md:py-16'} w-full flex justify-center text-white z-30 left-1/2 -translate-x-1/2 transition-colors duration-300 `}>
        <div className="wrapper max-w-[1280px] w-full flex items-center justify- md:justify-center max-md:mx-8 mx-8">
          <div className="rotate-90 text-3xl ">
            <button className="cursor-pointer" onClick={onToggle}>|||</button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
          {/* Logo absolute tengah */}
            <img
              className={`${navbarOpaque ? "w-32 brightness-0" : "md:w-40 w-28" }`}
              src={pesonaLogo}
              alt="Bendera Indonesia"
            />
          </div>

          {/* Navbar kanan */}
          <nav className="ml-auto hidden md:flex space-x-4 text-lg">
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
          </nav>
        </div>
    </header>
    </>
  );
}

export default Navbar;