import { RiAddFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Item } from "../store/slices/itemsSlice";
interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className="min-w-[calc((100%-16px)/2)] sm:min-w-[calc((100%-32px)/3)] md:min-w-[calc((100%-48px)/4)] xl:min-w-[calc((100%-96px)/5)] group relative cursor-pointer h-full bg-gray-300/50 backdrop-blur-md rounded-md">
      <div className="w-full flex items-center justify-center p-2 border-b-2 border-primary">
        <img
          className="h-40 group-hover:scale-110 transition duration-500 object-contain"
          src={item.imageUrl}
          alt={`${item.title}-Image`}
        />
      </div>
      <div className="flex flex-col gap-[2px] px-2 sm:px-3">
        <p className="text-sm xs:text-base sm:text-lg truncate mt-[6px] mb-[4px] text-textColor font-semibold">
          {item.title}
        </p>
        <p className="text-xs xs:text-sm truncate">{item.description}</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center text-sm font-sans">
          <p className="text-xs xs:text-sm font-medium">
            Price - $ <span className="font-semibold">{item.price}</span>
          </p>
          <p className="text-xs xs:text-sm font-medium">
            Calories - <span className="font-semibold">{item.calories}</span>
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-full sm:w-1/2 flex items-center justify-center gap-1 my-2 bg-primary hover:bg-primaryHover text-sm text-white pl-3 pr-2 py-1 rounded-md"
        >
          <p className="text-sm">Add</p>
          <RiAddFill className="text-lg" />
        </motion.button>
      </div>
    </div>
  );
};

export default ItemCard;
