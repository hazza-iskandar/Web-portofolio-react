import { useState } from "react";
import Button from "./Button";
import Listmenu from "./Listmenu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  // is open useState
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  let className = isOpen
    ? "w-25 transition absolute top-10 right-6 lg:right-15 z-99 bg-black"
    : "w-25 transition absolute top-10 right-6 lg:right-15 z-99";

  // let classNameMenu = isOpen
  //   ? "absolute top-9 h-[calc(100dvh-60px)] lg:h-fit right-6 lg:right-15 w-80 lg:w-100"
  //   : "absolute debug bg-black px-5 py-5 md:px-7 md:py-5 rounded-2xl top-9 right-6 lg:right-15 w-25 lg:w-25";

  const classNameMenu =
    "absolute top-9 h-[calc(100dvh-60px)] lg:h-fit right-6 lg:right-15 w-80 lg:w-100";
  return (
    <nav className="fixed z-999 w-full">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div className="logo fixed top-10 left-6 lg:left-16">
          <a
            href=""
            className="text-white/50 font-semibold text-xl"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            Hza_Dev
          </a>
        </div>

        {/* overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-xs -z-10"
            ></motion.div>
          )}
        </AnimatePresence>

        {/* menu */}
        <Button className={className} onClick={openMenu}>
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {isOpen ? "Close" : "Menu"}
            </motion.span>
          </AnimatePresence>
        </Button>

        {/* menu  */}
        <motion.div
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className={`${classNameMenu}`}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="menu-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Listmenu onClose={closeMenu} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
