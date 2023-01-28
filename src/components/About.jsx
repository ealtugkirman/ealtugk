import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

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
              I'm a freelancer Front-end with Lorem ipsum dolor sit amet.
            </h3>
            <p className='mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel natus possimus asperiores cupiditate, ipsum at! Harum vel eligendi aspernatur labore!
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experince
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href="/#" className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About