import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Colorblur from "../components/Colorblur";

// data marque
const Header = () => {
  let marqueData = [
    "Web Developer",
    "UI/UX Designer",
    "Front-End Developer",
    "Back-End Developer",
    "Tech Enthusiast",
  ];
  const repaetData = Array(3).fill(marqueData).flat();

  return (
    <>
      <header id="home">
        {/* navbar */}
        <Navbar></Navbar>

        {/* menu utama */}
        <section className="h-[70vh] md:h-screen md:mt-4 relative ">
          <div className="container">
            {/* jumbotron */}
            <div className="flex md:flex-col justify-between items-center h-full">
              <div className="flex justify-center items-center  flex-col gap-4 w-300 max-w-full mx-auto mt-20 md:mt-25">
                <h1
                  className="text-4xl lg:text-[6rem] text-center uppercase text-white font-bold lg:leading-28"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  HAZZA LAUZA'I MUADDAB ISKANDAR
                </h1>
                <p
                  className="text-sm text-slate lg:text-xl inline-block lg:w-3xl text-center mt-1 text-secondary opacity-80"
                  data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800"
                >
                  I am a developer and designer who has a passion for building
                  responsive, cool looking, and easy to visit website
                  applications.
                </p>
                <Button
                  href="#contact"
                  className="group bg-transparent px-5 border-2 border-white mt-2 flex gap-3 items-center transition"
                >
                  <span>Let's Talk </span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-arrow-right"
                    className="transition duration-500 ease-in-out group-hover:rotate-90"
                  />
                </Button>
              </div>

              {/* footer jumbotron */}
              <div className="hidden md:flex justify-between w-full">
                <p className="text-secondary" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                  <span className="font-semibold text-white">
                    BASED IN MAJALENGKA
                  </span>
                  , INDONESIA
                </p>
                <p className="text-secondary" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800"> 
                  <span className="font-semibold text-white">
                    WEB DEVELOPER
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* color blur */}
          <Colorblur className="opacity-70 right-0 bottom-20 w-full md:w-100 md:bottom-0"></Colorblur>
          <Colorblur className="opacity-60 left-[50%] top-[40%] w-100 h-80 hidden md:block md:-translate-[50%] rotate-180 rounded-full"></Colorblur>
          {/* <Colorblur className="opacity-70 top-[20%] right-0 w-80 h-[60%]"></Colorblur> */}
        </section>

        <Marquee
          className="w-full my-20 flex bg-myPrimary  text-white p-2 px-4 -rotate-2 md:-rotate-1 h-15 overflow-hidden"
          speed={80}
        >
          <div className="flex text-xl items-center font-semibold gap-2">
            {repaetData.map((item, index) => {
              return (
                <span key={index}>
                  {item}
                  <FontAwesomeIcon
                    icon="fa-solid fa-burst"
                    className="mx-2 ml-2"
                  />
                </span>
              );
            })}
          </div>
        </Marquee>
        {/* marque PR belum smooth */}
        {/* <Marque>WEB DEVELOPER  WEB DEVELOPER  WEB DEVELOPER <FontAwesomeIcon icon="fa-solid fa-plus" /> WEB DEVELOPER <FontAwesomeIcon icon="fa-solid fa-plus" /></Marque> */}
      </header>
    </>
  );
};

export default Header;
