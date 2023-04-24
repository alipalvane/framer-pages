import Head from "next/head";
import { motion } from "framer-motion";

const index = () => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16"
    >
      <Head>
        <title>Motion Page</title>
        <meta
          name="description"
          content="Motion page with framer library for animate between pages"
        />
      </Head>
      <main>
        <div className="my-80 p-1 overflow-hidden">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{duration:0.5, delay:0.5}}
            className="text-6xl text-center lg:text-right lg:text-9xl"
          >
            Happy Guys!
          </motion.h1>
        </div>
        <div className="flex justify-between">
          <div>
            <h2>Design</h2>
            <h2>Company</h2>
            <h2>2024</h2>
          </div>
          <div>
            <h3>We are gonna make your smile.</h3>
            <h3>Celebrate with us.</h3>
            <h3>Contact us to exprince amazing mood.</h3>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default index;
