import Image from "next/image";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <div className="w-full h-[50vh] md:h-[100vh]  items-center flex px-4 ">
    

      <div className="relative h-full md:h-full w-full md:w-full">
        <Image src="/images/img34.jpg" alt="heroImg" fill />
      </div>
    </div>
  );
};

export default Hero;
