import React from 'react'
import { BsArrowUpRight, } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll'

const services = [
  {
    name: 'UI/UX Design',
    description: 'I create user-friendly and visually appealing interfaces that meet your goals. My focus is on user experience and design principles.',
    link: 'Learn More'
  },
  {
    name: 'Development',
    description: 'I bring your website to life with efficient, optimized code. I offer full-service web development fast, secure, and search engine friendly.',
    link: 'Learn More'
  },
  {
    name: 'Digital Marketing',
    description: 'I offer digital marketing services to help you reach your target audience and achieve your goals. I develop custom strategies for search engine optimization, social media, and pay-per-click advertising.',
    link: 'Learn More'
  },
  {
    name: 'Product Branding',
    description: 'I create unique and consistent visual identities that accurately reflect your brand. I offer product branding services to help you launch or rebrand your product effectively.',
    link: 'Learn More'
  },
]


function Services() {
  return (
    <div id='services' className='section'>
      <div className="container mx-auto" >
        <div className='flex flex-col lg:flex-row '>
          {/* text and image */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0' >
          <h2 className='h2 text-accent mb-6'>What i do</h2>
          <h3 className='h3 max-w[455px] mb-16'>I'm a  <br /> freelancer</h3>
          <Link to="work">
          <button className='btn btn-sm' > See my Work</button>
          </Link>
          </motion.div>
          {/* services */}
          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className='flex-1 '>
            {/* service list */}
            <div>
              {services.map((service, index)=> {
                const {name, description, link} = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <Link to='contact'   className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                        </Link>
                      <Link to='contact'   className='text-gradient text-sm'>
                        {link}
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default Services