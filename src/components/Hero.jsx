import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";

const Hero = () => {
  // State to handle mouse movement for background animation
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen   overflow-hidden bg-cover bg-center"
     >
      <div
        className={`sm:my-[5rem] absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center`}
      >
        <motion.h1
          className={`${styles.heroHeadText} text-white text-md text-center`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I&apos;m
          <span
            className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#FF69B4]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            SHREYA
          </span>
        </motion.h1>

        <motion.p
          className={`${styles.heroSubText}   text-white-100 text-center`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          I build frontend web applications <br className="sm:block hidden" />
          and engaging user interfaces
        </motion.p>

        <motion.div
          className="mt-[5rem]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
          <a
            href="/resume_shreya.pdf"
            download
            className="px-6 py-3 bg-[#915EFF] text-white font-bold rounded-lg shadow-md hover:bg-[#7a4ce0] transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
