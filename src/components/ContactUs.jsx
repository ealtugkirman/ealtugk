import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kj89owr', 'template_cbk7yl9', form.current, 'hkQ-2hdK6LTVFgJnT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact' className='py-16 lg:section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[100px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          <motion.form variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }}  className='flex-1   items-start border rounded-2xl flex flex-col gap-y-6 pb-24 p-6' ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder='Your name' className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' name="user_name" />
            </div>
            <div>
              <input type="email" placeholder='Your email' className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' name="user_email" />
            </div>                
            <div>
              <input name="message" placeholder='Your message' className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-12 resize-none mb-12' />
              <button type='submit' className='btn btn-lg'>Send message</button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
