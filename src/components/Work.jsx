import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img3 from "../assets/bahadir.jpg";
import Img1 from "../assets/port-f.jpg";
import sohho from "../assets/sohho.jpg";
import tecvity from "../assets/tecvity.jpg";
import coal from "../assets/port-2.jpg";
import fylo from "../assets/fylo.jpg";

function Work() {
  return (
    <div id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-11 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                My portfolio showcases my design skills with a focus on
                delivering unique and personalized solutions for each client's
                needs.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={tecvity}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href="https://admirable-centaur-3bad3c.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-gradient"> Web Development </span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://admirable-centaur-3bad3c.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-3xl text-white">Tecvity.co</span>
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={coal}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> UI/UX Design </span>{" "}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a href="https://coalunion.io" target="_blank" rel="noreferrer">
                  <span className="text-3xl text-white">CoalUnion.io</span>
                </a>
              </div>
            </div>
            
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 ">
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={sohho}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> UI/UX Design </span>{" "}
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a href="https://sohho.xyz" target="_blank" rel="noreferrer">
                  <span className="text-3xl text-white">Sohho Night Club</span>
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"> UI/UX Design </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://xn--batkentmzik-0hb79d.com/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-3xl text-white">Batıkent Müzik</span>
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={fylo}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href="https://dancing-elf-10a1ec.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-gradient"> UI/UX Design </span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="https://dancing-elf-10a1ec.netlify.app/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-3xl text-white">Fylo</span>
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <a
                  href="http://kanyewestquotes.com/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-gradient"> UI/UX Design </span>
                </a>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a
                  href="http://kanyewestquotes.com/"
                  target="_blank"
                  rel="noreferrer">
                  <span className="text-3xl text-white">Kanye West Quotes</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Work;
