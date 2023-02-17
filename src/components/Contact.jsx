import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'

const initialValues = {
  name: '',
  email: '',
  message: '',
  channel: '', // Added empty string as a value for "channel"
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
});

const sendEmail = (e) => {
  e.preventDefault();
}

const onSubmit = (values) => {
  console.log('Form data', values);
  sendEmail();
}

function Contact() {
  const form = useRef(); // Defined inside the function

  const sendEmail = (e) => {
    emailjs.sendForm('service_kj89owr', 'template_4m5okwo', form.current, 'hkQ-2hdK6LTVFgJnT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });
  
  
    return (
      <section id='contact' className='py-16 lg:section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[100px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} action="" className='flex-1   items-start border rounded-2xl flex flex-col gap-y-6 pb-24 p-6'>
            <form ref={form} onSubmit={sendEmail}>
              <div>
              <input id='name' name='user_name' {...formik.getFieldProps('name')} type="text" className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' placeholder='Your name' />
              {formik.touched.name && formik.errors.name ? <div className='error'> {formik.errors.name} </div> : null }
              </div>

              <div>
              <input id='name' name='user_email' {...formik.getFieldProps('email')} type="email" className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' placeholder='Your email' />
              {formik.touched.email && formik.errors.email ? <div className='error'> {formik.errors.email} </div> : null }
              </div>

              <div>
              <input value="Send"  id='name' name='message' {...formik.getFieldProps('message')} className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-12 resize-none mb-12' placeholder='Your message'></input>
              <button type='submit' className='btn btn-lg'>Send message</button>
              {formik.touched.message && formik.errors.message ? <div className='error'> {formik.errors.channel} </div> : null }
              </div>
            </form>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
  


export default Contact