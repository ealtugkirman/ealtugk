import React from 'react';
import Image from '../assets/al2-final2.svg';
import { FaGithub, FaTwitter, } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll'



function Banner() {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78] flex items-center'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          <div className='flex-1  text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Emre Altuğ Kırman
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:tect-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a </span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Shopify Developer',
                2000,
                'Designer',
                2000,
                'Web Developer',
                2000,
              ]}
                speed={50}
                className="text-accent"
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0 '>
              Welcome. I specialize in creating professional and modern web and mobile applications. With my experience as a developer and designer, I am dedicated to delivering high-quality and user-friendly products that meet the needs of my clients. My services include web and mobile app development, UI/UX design, and website development.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to="contact">
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <Link to="work">
                <a href="/#" className='text-gradient btn-link'>My Porfolio</a>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0' >
              <a href="https://twitter.com/ealtugk">
                <FaTwitter />
              </a>
              <a href="https://github.com/ealtugkirman">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='hidden lg:flex max-w-[260] lg:max-w-[482] mx-auto'>
            <img className=' w-full  ' src={Image} alt="Emre Altug Kırman aka Web Developer" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner