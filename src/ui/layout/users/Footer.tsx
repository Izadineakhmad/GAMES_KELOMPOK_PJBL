import { pesonaLogo } from '@/assets'

function Footer() {
    const socialMedia = ['Facebook', 'Instagram', 'TikTok', 'LinkedIn']

    return (
        <footer className='bg-neutral-800 text-white'>
            {/* Main content dengan grid responsif */}
            <section className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-12'>
                
                {/* Logo section */}
                <div className='flex justify-center md:justify-start items-center'>
                    <img 
                        src={pesonaLogo} 
                        alt="Logo Pesona Indonesia" 
                        className='w-48' 
                    />
                </div>
                
                {/* Social media section */}
                <div className='flex justify-center md:justify-start items-center'>
                    <nav>
                        <p className='text-xl font-bold text-neutral-300 mb-4'>Social Media</p>
                        <ul className='grid gap-4 left-0'>
                            {socialMedia.map((social, index) => 
                                <li key={index} className='hover:text-amber-400 transition-colors'>
                                    {social}
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </section>
            
            {/* Copyright */}
            <div className='border-t border-t-neutral-500'>
                <p className='text-center py-4 px-4 text-neutral-400 max-sm:text-sm'>
                    Copyright ©2025 Ministry of Tourism, Republic of Indonesia
                </p>
            </div>
        </footer>
    )
}

export default Footer