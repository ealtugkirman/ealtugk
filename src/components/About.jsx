import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll'

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className='flex-1 hidden lg:block bg-about bg-contain items-center bg-no-repeat w-1/2 h-[540] mix-blend-lighten bg-top'>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>
              I'm a freelancer Front-end Developer, Web Developer, Designer.
            </h3>
            <p className='mb-6'>
            As a freelance web designer, I have honed my skills in creating websites that are both aesthetically pleasing and functional. I made the leap to become a freelance web designer, allowing me to work with a wider range of clients and bring their unique visions to life. With a strong focus on clean, modern design and a deep understanding of user experience, I aim to create websites that are not only visually appealing, but also easy to navigate and use.
Whether you are looking to establish a new online presence or refresh your existing website, I am here to help. Let's work together to make your dream website a reality.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experince
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to="contact">
            <button className='btn btn-lg'>Contact me</button>
            </Link>
            <Link to="work">
            <a href="/#" className='text-gradient btn-link'>My Portfolio</a>
            </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About