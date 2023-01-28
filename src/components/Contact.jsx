import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


function Contact() {
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[100px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.3}} action="" className='flex-1   items-start border rounded-2xl flex flex-col gap-y-6 pb-24 p-6'>
            <input type="text" className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' placeholder='Your name' />
            <input type="text" className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' placeholder='Your email' />
            <textarea className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-12 resize-none mb-12'  placeholder='Your message'></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact