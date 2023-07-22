import { BiDish } from "react-icons/bi";
import { categories } from "../pages/AddItemPage";
import { useState } from "react";
import { motion } from "framer-motion";

const MenuContainer = () => {
  const [inputCategory, setInputCategory] = useState<string>(categories[0]);
  return (
    <section className="my-6">
      <h2 className="relative inline text-2xl font-semibold text-headingColor">
        Hot Dishes
        <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-primary" />
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 my-6">
        {categories.map((category) => (
          <motion.label
            whileTap={{
              scale: 0.9,
            }}
            htmlFor={category}
            key={category}
            className={`${
              inputCategory === category && "bg-primary text-white"
            } w-20 h-20 cursor-pointer rounded-md border border-gray-400 flex flex-col items-center justify-center gap-1`}
          >
            <BiDish
              className={`${
                inputCategory === category ? "text-white" : "text-primary"
              } text-3xl`}
            />
            <p className="text-sm capitalize font-light">{category}</p>
            <input
              onChange={(e) => setInputCategory(e.target.value)}
              className="sr-only"
              name="category"
              id={category}
              type="radio"
              value={category}
            />
          </motion.label>
        ))}
      </div>
    </section>
  );
};

export default MenuContainer;
