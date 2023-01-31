import React from 'react'
import Logo from "../assets/ealtugk-no-bg.png";
import { Link } from 'react-scroll'


function Header() {
  return (
    <div className='py-8'>
      <div className='container mx-auto' >
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href="/#">
            <img src={Logo} className="w-36 lg:w-60" alt="" />
          </a>
          <Link to="contact">
          <button className='btn btn-sm'>Work With me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header