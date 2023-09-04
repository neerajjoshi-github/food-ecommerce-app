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
    <div className={`w-full rounded-md ${bgColor} p-2 flex flex-col gap-4`}>
      <motion.img
        src={image}
        className="w-full h-40 object-cover rounded-md"
        alt=""
      />
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
    </div>
  );
};

export default ServiceCard;
