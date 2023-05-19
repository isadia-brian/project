import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Card from "./Card";

const Activities = [
  {
    title:"Immerse in Beach Life",
    image:"/images/beach.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus exercitationem perspiciatis! Id dolorum recusandae quisquam animi impedit deserunt quis?",
  },
  {
    title:"Snorkelling",
    image:"/images/snorka.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus exercitationem perspiciatis! Id dolorum recusandae quisquam animi impedit deserunt quis?",
  },
  {
    title:"Kayaking",
    image:"/images/raft.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus exercitationem perspiciatis! Id dolorum recusandae quisquam animi impedit deserunt quis?",
  },
  {
    title:"Jetskiing",
    image:"/images/jetsky.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus exercitationem perspiciatis! Id dolorum recusandae quisquam animi impedit deserunt quis?",
  },
  {
    title:"Tour Tsavo",
    image:"/images/wild.jpg",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus exercitationem perspiciatis! Id dolorum recusandae quisquam animi impedit deserunt quis?",
  },
]

function Things() {
  return (
    <div className="w-full h-full px-4">
      <div className="relative">
        <h1 className={`md:text-[50px] text-center py-10 md:py-20`}>
          <Heading title="Things To Do while at Diani" />
        </h1>
        <p></p>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        {
          Activities.slice(0,1).map((activity, index) => (
            <Card title={activity.title} image={activity.image} description={activity.description}/>
            ))
        }
        <div className="grid grid-cols-2 gap-2">
        {
          Activities.slice(1,3).map((activity, index) => (
            <Card title={activity.title} image={activity.image} description={activity.description}/>
            ))
        }
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2">
      {
          Activities.slice(3,5).map((activity, index) => (
            <Card title={activity.title} image={activity.image} description={activity.description}/>
            ))
        }
      </div>
    </div>
  );
}

export default Things;
