import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menus = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const sosmeds = [
  { title: "Instagram", href: "https://www.instagram.com/za_iskndr/" },
  {
    title: "Linkedln",
    href: "https://www.linkedin.com/in/hazza-lauzai-muaddab-iskandar/",
  },
  { title: "Github", href: "https://github.com/hazza-iskandar" },
];

const variants = {
  initial: { y: 0, opacity: 0.5 },
  hover: { y: -5, opacity: 1, transition: { duration: 0.3 } },
};

const className = "transition-all duration-1000 rounded-2xl flex flex-col justify-between gap-10 bg-black w-full h-full px-10 pt-20 pb-10 shadow-white";

const Listmenu = ({onClose}) => (
  <div className={className}>
    <motion.div className="flex flex-col gap-4 mb-10">
      {menus.map((menu) => (
        <motion.a
          key={menu.title}
          href={menu.href}
          className="group flex items-center text-4xl md:text-5xl text-white/50 hover:text-white"
          whileHover="hover"
          onClick={onClose}
        >
          <motion.span
            className="text-2xl me-1 absolute"
            initial={{ opacity: 0, x: -15 }}
            variants={{
              hover: {
                opacity: 1,
                x: 0,

                transition: {
                  duration: 0.599,
                  ease: [0.74, 0.01, 0.05, 0.095],
                },
              },
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </motion.span>

          <motion.span
            variants={{
              initial: { x: 0 },
              hover: {
                x: 40,
                transition: {
                  type: "tween",
                  stiffness: 50,
                  damping: 100,
                },
              },
            }}
            className="duration-100"
          >
            {menu.title}
          </motion.span>
        </motion.a>
      ))}
    </motion.div>

    <div className="flex flex-wrap mt-5">
      {sosmeds.map((sosmed) => (
        <motion.a
          key={sosmed.title}
          href={sosmed.href}
          className="w-1/2 mt-1.5 text-white/70 hover:text-white"
          target="_blank"
          initial="initial"
          whileHover="hover"
        >
          <motion.span className="inline-block" variants={variants}>
            {sosmed.title}
          </motion.span>
        </motion.a>
      ))}
    </div>
  </div>
);

export default Listmenu;
