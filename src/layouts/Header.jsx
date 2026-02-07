import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Colorblur from '../components/Colorblur'
import SplashCursor from '../components/reactbits/SplashCursor'

const Header = () => {
  return (
    <>
      <header>
        {/* navbar */}
        <Navbar></Navbar>

        {/* menu utama */}
        <section className="h-[70vh] md:h-screen md:mt-4 relative " id="Home">
          <div className="container">
            {/* jumbotron */}
            <div className='flex md:flex-col justify-between items-center h-full'>
              <div className="flex justify-center items-center  flex-col gap-4 w-300 max-w-full mx-auto mt-20 md:mt-25">
                <h1 className="text-4xl lg:text-[6rem] text-center uppercase text-white font-bold lg:leading-28">
                  HAZZA LAUZA'I MUADDAB ISKANDAR
                </h1>
                <p className="text-sm text-slate lg:text-xl inline-block lg:w-3xl text-center mt-1 text-secondary opacity-80">
                  I am a developer and designer who has a passion for building
                  responsive, cool looking, and easy to visit website
                  applications.
                </p>
                <Button className="group bg-transparent px-5 border-2 border-white mt-2 flex gap-3 items-center transition">
                    <span>Let's Talk </span>
                     <FontAwesomeIcon icon="fa-solid fa-arrow-right" className='transition duration-500 ease-in-out group-hover:translate-x-2'/>
                </Button>
              </div>

              {/* footer jumbotron */}
              <div className="hidden md:flex justify-between w-full">
                <p className='text-secondary'><span className='font-semibold text-white'>BASED IN MAJALENGKA</span>, INDONESIA</p>
                <p className='text-secondary'><span className='font-semibold text-white'>WEB DEVELOPER</span></p>
              </div>
            </div>
          </div>

          {/* color blur */}
          <Colorblur className="opacity-70 right-0 bottom-20 w-full md:w-100 md:bottom-0"></Colorblur>
          <Colorblur className="opacity-60 left-[50%] top-[40%] w-100 h-80 hidden md:block md:-translate-[50%] rotate-180 rounded-full"></Colorblur>
          {/* <Colorblur className="opacity-70 top-[20%] right-0 w-80 h-[60%]"></Colorblur> */}
        </section>

        <SplashCursor></SplashCursor>
      </header>
    </>
  );
};

export default Header;
