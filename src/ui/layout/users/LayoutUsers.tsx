import Navbar from '@/ui/layout/users/Navbar'
import Sidebar from '@/ui/layout/users/Sidebar'
import React, { useState } from 'react'
import Footer from './Footer'

function LayoutUser ({children}: {children: React.ReactNode}) {

    const [sidebar, setSidebar] = useState<boolean>(false)

    const onToggle = () => {
        setSidebar(prevSidebar => !prevSidebar )
    }

    function onClose () {
        setSidebar(false)
    }

    return (
        <>
            <Navbar onToggle={onToggle} />
            <Sidebar onClose={onClose} openSidebar={sidebar} />
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default LayoutUser