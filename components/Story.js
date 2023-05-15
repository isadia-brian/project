import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

const Story = () => {
  return (
    <div className="h-full relative w-full">
      <div className="w-full flex flex-col md:flex-row items-center mt-0 bg-green-50 ">
        

        <div className="w-full md:w-1/2 h-full md:flex justify-center items-center">
          <div className="py-12 px-4 md:px-16 text-center md:text-left">
            <div className="relative w-full md:w-fit">
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.9 }}
                className="text-center"
              >
                <Heading title="Our Story" smallHeader />
              </motion.h2>
            </div>
         
          

            <motion.p
              initial={{ opacity: 0, y:100 }}
              whileInView={{ opacity: 1, y:1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className=" my-8"
            >
              Our founder, a world traveler with a deep appreciation for natural
              beauty and luxury hospitality, was inspired by the breathtaking
              landscapes of Diani to create something truly special. With a
              vision for a sustainable, eco-friendly villa that would offer
              discerning travelers a haven of relaxation and refinement, Silent
              Palms Villas was born.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="mt-8 text-xs underline "
            >
              The Full Story
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-[50vh] md:h-[80vh] relative w-full md:w-1/2 rounded-lg md:rounded-none  "
        >
          <Image src="/images/hero.webp" alt="image" fill className="px-4 md:px-0 rounded-lg md:rounded-none " />
        </motion.div>
      </div>
    </div>
  );
};

export default Story;
