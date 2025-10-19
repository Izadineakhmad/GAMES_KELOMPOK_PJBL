import { useEffect, useState } from 'react'
import heroVideos from '@/assets/icon/Vid 20240208 181109(4).mp4'
import { pesonaLogo } from '@/assets';
import GradientButton from '../shared/GradientButton';

function Heroes() {
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 350)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        src={heroVideos}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        loop
        autoPlay
        muted
      />

      {/* Overlay hitam semi transparan */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten utama di atas video */}
      <div className='relative h-full w-full'>
        {/* Logo di tengah */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={pesonaLogo}
            alt="Logo Pesona Indonesia"
            className="w-72 md:w-96"
          />
        </div>
        
        {/* Tombol di bawah logo */}
        <div
          className={`absolute left-1/2 bottom-60 -translate-x-1/2 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <GradientButton/>
        </div>
      </div>
    </section>
  );
}

export default Heroes