import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleIsCartOpen } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";
import Button from "../reusables/Button";
import CartItemCard from "./CartItemCard";
import CartTotal from "./CartTotal";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{
        x: 500,
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: 500,
      }}
      transition={{
        bounce: 0,
      }}
      className="z-50 fixed top-0 right-0 w-80 h-screen bg-white rounded-tl-[100px] pt-10 border-l border-gray-300 drop-shadow-2xl"
    >
      <div className="flex items-center justify-between px-6">
        <BsArrowLeft
          onClick={() => dispatch(toggleIsCartOpen())}
          className="text-2xl cursor-pointer"
        />

        <h3 className="text-lg">Cart</h3>
        <Button
          variant="muted"
          size="sm"
          onClick={() => dispatch(clearCart())}
          className="rounded-xl px-2"
        >
          Clear
        </Button>
      </div>

      {cartItems.length > 0 ? (
        <div className="w-full h-full mt-2  flex flex-col gap-4 bg-gray-300/50 px-1 pt-4 pb-[250px] overflow-y-auto scroll-bar-hidden">
          {cartItems.map((item) => (
            <CartItemCard key={item.id} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full mt-2 flex flex-col items-center justify-center gap-4 bg-gray-300/50 px-1 pb-24">
          <img src="/images/not-found.svg" alt="Not found image" />
          <p className="text-lg">Your cart is empty.</p>
        </div>
      )}

      <CartTotal />
    </motion.div>
  );
};

export default Cart;
