import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail.includes("@")) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  // submit işlemi gerçekleştirilebilir

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kj89owr",
        "template_cbk7yl9",
        form.current,
        "hkQ-2hdK6LTVFgJnT"
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Your email sent :)", {
            position: "top-center",
            autoClose: 3003,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        (error) => {
          alert(error.text);
        }
      );
    if (submitDisabled) {
      return;
    }
  };

  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[100px] leading-none mb-8">
                Let's work <br /> together!
              </h2>
              <p className="text-md lg:text-lg text-red-500 leading-none mb-12">
                ( If you came from upwork do not mail me. <br /> I do not work
                apart from upwork. )
              </p>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1   items-start border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
            ref={form}
            onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3"
                name="user_name"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                className="bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-3"
                name="user_email"
              />
            </div>
            <div>
              <input
                name="message"
                placeholder="Your message"
                className="bg-transparent  outline-none w-full placeholder:text-white focus:border-accent transition-all border-b py-12 resize-none mb-12"
              />
              <button
                type="submit"
                disabled={submitDisabled}
                className="btn btn-lg">
                Send message
              </button>
              <ToastContainer
                position="top-center"
                autoClose={3100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
