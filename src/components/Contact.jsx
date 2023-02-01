import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  message: '',
}
const validationSchema = Yup.object({
  name: Yup.string().required('Requried'),
  email: Yup.string().email('Invalid email format').required('Required'),
  channel: Yup.string().required('Required')
});
const onSubmit = values => {
  console.log('Form data', values)
}


function Contact() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
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
            <form onSubmit={formik.handleSubmit}>
              <div>
              <input id='name' name='name' {...formik.getFieldProps('name')} type="text" className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' placeholder='Your name' />
              {formik.touched.name && formik.errors.name ? <div className='error'> {formik.errors.name} </div> : null }
              </div>

              <div>
              <input id='name' name='email' {...formik.getFieldProps('email')} type="text" className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3' placeholder='Your email' />
              {formik.touched.email && formik.errors.email ? <div className='error'> {formik.errors.email} </div> : null }
              </div>

              <div>
              <input id='name' name='message' {...formik.getFieldProps('message')} className='bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-12 resize-none mb-12' placeholder='Your message'></input>
              <button className='btn btn-lg'>Send message</button>
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