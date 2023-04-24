import { motion } from "framer-motion";
import {container, item} from "../animation";

export default function Contact() {
  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 h-full w-full bg-red-100 lg:px-48 px-16"
    >
      <div className="my-80 p-1 overflow-hidden">
        <motion.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-6xl text-center lg:text-right lg:text-9xl"
        >
          Let's Talk
        </motion.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="lg:text-xl text-2xl underline">
          <motion.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <motion.li className="pb-2" variants={item}>Instagram</motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li className="pb-2" variants={item}>Twitter</motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li className="pb-2" variants={item}>Linkedin</motion.li>
            </div>
          </motion.ul>
        </div>
      </div>
    </motion.main>
  );
}
