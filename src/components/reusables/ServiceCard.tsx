import React from "react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  bgColor,
  textColor,
}) => {
  const text_color = `text-[${textColor}]`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
        type: "tween",
      }}
      className={`w-full rounded-md ${bgColor} p-2 flex flex-col gap-4`}
    >
      <img src={image} className="w-full h-40 object-cover rounded-md" alt="" />
      <div className="flex flex-col gap-2">
        <div className="max-w-fit relative">
          <p className={`${text_color} text-sm sm:text-xl font-semibold`}>
            {title}
          </p>
          <span
            className={`bg-white absolute h-[2px] w-3/4 right-0 bottom-0`}
          ></span>
        </div>
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
