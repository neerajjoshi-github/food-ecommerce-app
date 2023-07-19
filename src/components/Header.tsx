import { useState } from "react";
import Logo from "../assets/images/logo.png";
import ProfileImage from "../assets/images/profile-image.png";
import { BsBag } from "react-icons/bs";
import { BiMenuAltLeft, BiSolidUserCircle } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config.ts";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice.ts";
import { RootState } from "../store/store.ts";
import { TbLogout } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const login = async () => {
    try {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      console.log(refreshToken, providerData[0]);
      dispatch(setUser({ refreshToken, ...providerData[0] }));
      localStorage.setItem(
        "user",
        JSON.stringify({ refreshToken, ...providerData[0] })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setIsUserMenuOpen(false);
    localStorage.clear();
    dispatch(setUser(null));
  };
  return (
    <>
      <header className="inset-0 z-50 w-screen ">
        {/* Desktop / Tablet */}
        <div className="hidden md:flex px-16 py-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="w-10 object-cover" alt="Logo Image" />
            <p className="text-headingColor text-xl font-bold">Fruitsify</p>
          </Link>
          <div className="ml-auto flex items-center gap-8">
            <motion.ul
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              className="flex items-center gap-8"
            >
              <li className="cursor-pointer font-semibold text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer font-semibold text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
                <Link to="/">About</Link>
              </li>
              <li className="cursor-pointer font-semibold text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
                <Link to="/">Menu</Link>
              </li>
              <li className="cursor-pointer font-semibold text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
                <Link to="/">Services</Link>
              </li>
            </motion.ul>
            <div className="relative flex items-center justify-center">
              <BsBag className="cursor-pointer text-2xl text-textColor" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[1.5px]">
                <p className="text-sm font-semibold">0</p>
              </div>
            </div>
            <div className="w-20 h-12 flex items-center justify-center">
              {user ? (
                <div
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="relative w-full h-full"
                >
                  <motion.div
                    className="cursor-pointer w-full h-full rounded-full flex items-center justify-around border border-primary  shadow-xl"
                    whileTap={{ scale: 0.8 }}
                  >
                    <BiMenuAltLeft className="text-2xl" />
                    <img
                      className="w-7 h-auto rounded-full object-cover"
                      src={user.photoURL ? user.photoURL : ProfileImage}
                      alt="Profile Image"
                    />
                  </motion.div>
                  {/* Dropdown user menu */}
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{
                          scale: 0.6,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        exit={{
                          scale: 0.6,
                          opacity: 0,
                        }}
                        className="absolute -right-8 top-16 flex flex-col w-40 bg-primaryBg border-gray-600 border rounded-lg shadow-xl py-4"
                      >
                        <div className="cursor-pointer  flex justify-between px-6 py-2 gap-2 items-center hover:bg-primary hover:text-white transition">
                          <p>Account</p>
                          <BiSolidUserCircle className="text-[1.35rem]" />
                        </div>
                        {user.email === "nj7055233@gmail.com" && (
                          <Link
                            to="/addItem"
                            className="flex justify-between px-6 py-2 gap-2 border-t border-gray-600 items-center hover:bg-primary hover:text-white transition"
                          >
                            <p>Add Item</p>
                            <IoMdAdd className="text-[1.35rem]" />
                          </Link>
                        )}
                        <div
                          onClick={logout}
                          className="cursor-pointer border-t border-gray-600 flex justify-between px-6 py-2 gap-2 items-center hover:bg-primary hover:text-white transition"
                        >
                          <p>Logout</p>
                          <TbLogout className="text-[1.35rem]" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  onClick={login}
                  whileTap={{ scale: 0.8 }}
                  className="bg-primary text-white w-full h-full rounded-full font-medium shadow-xl"
                >
                  Login
                </motion.button>
              )}
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex md:hidden p-4 ">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="Logo Image" />
            <p className="hidden xs:flex text-headingColor text-xl font-bold">
              Fruitsify
            </p>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <BsBag className="cursor-pointer text-2xl text-textColor" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[2px]">
                <p className="text-sm font-semibold">0</p>
              </div>
            </div>
            <div className="w-20 h-12 flex items-center justify-center">
              {user ? (
                <div
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="relative w-full h-full"
                >
                  <motion.div
                    className="cursor-pointer w-full h-full rounded-full flex items-center justify-around border border-primary  shadow-xl"
                    whileTap={{ scale: 0.8 }}
                  >
                    <BiMenuAltLeft className="text-2xl" />
                    <img
                      className="w-7 h-auto rounded-full object-cover"
                      src={user.photoURL ? user.photoURL : ProfileImage}
                      alt="Profile Image"
                    />
                  </motion.div>
                  {/* Dropdown user menu */}
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{
                          scale: 0.6,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        exit={{
                          scale: 0.6,
                          opacity: 0,
                        }}
                        className="absolute right-0 top-16 flex flex-col w-40 bg-primaryBg border-gray-600 border rounded-lg shadow-xl py-4"
                      >
                        <ul className="flex flex-col">
                          <li className="cursor-pointer flex justify-between px-6 py-2 gap-2 border-b border-gray-600 items-center hover:bg-primary hover:text-white transition">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="cursor-pointer flex justify-between px-6 py-2 gap-2 border-b border-gray-600 items-center hover:bg-primary hover:text-white transition">
                            <Link to="/">About</Link>
                          </li>
                          <li className="cursor-pointer flex justify-between px-6 py-2 gap-2 border-b border-gray-600 items-center hover:bg-primary hover:text-white transition">
                            <Link to="/">Menu</Link>
                          </li>
                          <li className="cursor-pointer flex justify-between px-6 py-2 gap-2 border-b border-gray-600 items-center hover:bg-primary hover:text-white transition">
                            <Link to="/">Services</Link>
                          </li>
                        </ul>
                        <div className="cursor-pointer  flex justify-between px-6 py-2 gap-2 items-center hover:bg-primary hover:text-white transition">
                          <p>Account</p>
                          <BiSolidUserCircle className="text-[1.35rem]" />
                        </div>
                        {user.email === "nj7055233@gmail.com" && (
                          <Link
                            to="/addItem"
                            className="flex justify-between px-6 py-2 gap-2 border-t border-gray-600 items-center hover:bg-primary hover:text-white transition"
                          >
                            <p>Add Item</p>
                            <IoMdAdd className="text-[1.35rem]" />
                          </Link>
                        )}
                        <div
                          onClick={logout}
                          className="cursor-pointer border-t border-gray-600 flex justify-between px-6 py-2 gap-2 items-center hover:bg-primary hover:text-white transition"
                        >
                          <p>Logout</p>
                          <TbLogout className="text-[1.35rem]" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  onClick={login}
                  whileTap={{ scale: 0.8 }}
                  className="bg-primary text-white w-full h-full rounded-full font-medium shadow-xl"
                >
                  Login
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;