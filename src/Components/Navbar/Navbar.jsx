import React, { useState } from 'react'
import Logo from '../../assets/Header/Logo.png'
import Bar from '../../assets/./Header/icons8-menu-bar-50.png'
const Navbar = () => {

    const [toggle, setTogle] = useState(false)

  return (
    <>
        <div className='navbar-area py-[15px] bg-[#ffffff] fixed top-0 left-0 w-full'>
            <div className="container mx-auto">
               <div className='row md:flex justify-between items-center py-0 '>
                    <div className='logo'>
                       <a  href="#">
                       <img src={Logo} alt="main logo" className='w-[103px] h-[60px] object-cover' />
                       </a>
                    </div>
                    <span onClick={()=>setTogle(!toggle)} className='absolute top-6 right-10 cursor-pointer md:hidden'><img src={Bar} alt="" /></span>
                    <div className='nav-area'>
                        <ul className={`md:flex md:items-center p-2 absolute md:static left-0 bg-white w-full md:w-auto md:w-auto z-[-1] ${toggle ? 'hidden' : 'block'}`}>
                            <li className='md:ml-8 font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150 '><a href="#">home</a></li>
                            <li className='md:ml-8 font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150 '><a href="#">about</a></li>
                            <li className='md:ml-8 font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150 '><a href="#">service</a></li>
                            <li className='md:ml-8 font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150 '><a href="#">protfolio</a></li>
                            <li className='md:ml-8 font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150 '><a href="#">price</a></li>
                            <li className='md:ml-8 font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150 '><a href="#">blog</a></li>
                            <button className='contact-btn md:ml-16'>
                                <a className='font-sans text-[#192239] capitalize font-[500] text-[18px] hover:text-[#FF7628] duration-150 ease-in-out md:duration-150' href='#'>Contact Us</a>
                            </button>
                        </ul>
                        
                    </div>
               </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
