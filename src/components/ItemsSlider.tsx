import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ItemCard from "./ItemCard";
import { useRef, useState } from "react";
import { Item } from "../store/slices/itemsSlice";

interface ItemSliderProps {
  items: Item[];
  title: string;
}

const ItemsSlider = ({ items, title }: ItemSliderProps) => {
  const [showSliderButton, setShowSliderButton] = useState(
    (window.innerWidth > 1280 && items.length > 5) ||
      (window.innerWidth < 1280 && items.length > 4)
  );
  window.addEventListener("resize", () => {
    setShowSliderButton(
      (window.innerWidth > 1280 && items.length > 5) ||
        (window.innerWidth < 1280 && items.length > 4)
    );
  });

  const sliderDivRef = useRef<HTMLDivElement>(null);
  const shift = (direction: "left" | "right") => {
    if (!sliderDivRef) return;
    if (!sliderDivRef.current?.clientWidth) return null;
    let shiftValue = 0;
    if (window.innerWidth > 1280) {
      shiftValue = (sliderDivRef.current?.clientWidth - 96) / 5 + 24.05;
    } else {
      shiftValue = (sliderDivRef.current?.clientWidth - 48) / 4 + 16.05;
    }
    if (direction === "right") {
      sliderDivRef.current.scrollLeft += shiftValue;
    } else {
      sliderDivRef.current.scrollLeft -= shiftValue;
    }
  };

  return (
    <section className="w-full my-6">
      <div className="w-full flex justify-between">
        {title && (
          <h2 className="relative inline text-2xl font-semibold text-headingColor">
            {title}
            <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-primary" />
          </h2>
        )}
        {showSliderButton && (
          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileTap={{
                scale: 0.5,
              }}
              onClick={() => shift("left")}
              className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer bg-primary hover:bg-primaryHover 
        transition duration-200"
            >
              <MdChevronLeft className="text-2xl text-white" />
            </motion.div>
            <motion.div
              whileTap={{
                scale: 0.5,
              }}
              onClick={() => shift("right")}
              className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer bg-primary hover:bg-primaryHover 
        transition duration-200"
            >
              <MdChevronRight className="text-2xl text-white" />
            </motion.div>
          </div>
        )}
      </div>
      <div
        ref={sliderDivRef}
        className="scroll-smooth scroll-bar-hidden rounded-md w-full my-4 flex gap-4 xl:gap-6 overflow-x-auto py-2"
      >
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ItemsSlider;
