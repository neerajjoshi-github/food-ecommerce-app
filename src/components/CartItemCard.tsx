import Select from "react-select";
import { motion } from "framer-motion";
import { CartItem } from "../store/slices/cartSlice";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const quantityOption = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

interface CartItemProps {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col px-2 bg-white rounded-md">
      <div className="flex items-center gap-4 ">
        <div className="w-24 h-24">
          <img
            className="w-full object-contain"
            src={cartItem.imageUrl}
            alt={cartItem.title}
          />
        </div>
        <div>
          <p className="text-headingColor text-lg">{cartItem.title}</p>
          <p className="text-sm truncate">{cartItem.description}</p>
          <p>
            $ <span>{cartItem.price}</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 border-t border-primary py-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="py-1 px-3 bg-slate-600 text-white rounded-md text-sm"
          onClick={() => dispatch(removeFromCart(cartItem.id))}
        >
          Remove
        </motion.button>

        <Select
          onChange={(e) =>
            dispatch(updateQuantity({ id: cartItem.id, qty: e?.value || "1" }))
          }
          options={quantityOption}
          classNames={{
            control: () => "",
            indicatorsContainer: () => "cursor-pointer",
            option: () => "!cursor-pointer",
          }}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#ea5765",
              primary25: "#f7aaad",
              primary50: "#f7aaad",
            },
          })}
          placeholder="qty"
          defaultValue={quantityOption[0]}
        />

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="py-1 px-3 bg-primary text-white rounded-md text-sm"
        >
          Buy Now
        </motion.button>
      </div>
    </div>
  );
};

export default CartItemCard;
