import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";

function Things() {
  return (
    <div className="w-full h-full px-4">
      <div className="relative">
        <h1 className={`md:text-[50px] text-center py-10 md:py-20`}>
          <Heading title="Things To Do while at Diani" />
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        <div className="h-56 md:h-80 relative">
          <Image src="/images/beach.jpg" alt fill />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-56 md:h-80 relative">
            <Image src="/images/snorka.jpg" alt fill />
          </div>
          <div className="h-56 md:h-80 relative">
            <Image src="/images/raft.jpg" alt fill />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="h-56 md:h-80 relative">
          <Image src="/images/jetsky.jpg" alt fill />
        </div>
        <div>
          <div className="h-56 md:h-80 relative">
            <Image src="/images/wild.jpg" alt fill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Things;
