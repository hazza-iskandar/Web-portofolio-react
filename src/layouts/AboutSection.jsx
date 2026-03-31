import Lanyard from "../components/reactbits/Lanyard";
import Colorblur from "../components/Colorblur";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-10 ">
      <div className="container">
        <div className="w-full md:flex gap-5 rounded-md px-5 md:px-10 py-5 shadow-about overflow-hidden">
          <div className="w-full lg:w-1/2 relative -top-6 h-140">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>

          <div className="w-full mt-15 md:mt-0 lg:w-1/2 text-center flex flex-col items-center justify-center">
            <h1
              className="font-instrument text-2xl md:text-4xl lg:text-5xl mb-7 md:mb-10 font-bold relative after:inline-block after:w-50 after:h-0.75 after:bg-myPrimary after:absolute after:-bottom-3 after:left-0"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              More About Me
            </h1>
            <p
              className="font-semibold mb-3 text-sm md:text-lg"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              I’M A FULLSTACK DEVELOPER SPECIALIZING IN BUILDING SCALABLE, RESPONSIVE WEB APLICATIONS. AND I’M PASSIONATE ABOUT CREATING MODERN, SYSTEM WITH INTUITIVE USER EXPERIENCE.
            </p>
            <p
              className="text-sm text-slate lg:text-xl inline-block text-center mt-1 text-secondary opacity-80"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              I'm a Front-End Developer who allows me to bring my creative
              vision to life. I love finding “unexpected solutions” and believe
              that with the right perspective, design can enhance the human
              experience.
            </p>

            {/* sosial media */}
            <div className="flex gap-2 mt-5 ">
              <a
                href=""
                className="text-2xl"
                data-aos="zoom-in"
                data-aos-delay="1400"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
              <a
                href=""
                className="text-2xl"
                data-aos="zoom-in"
                data-aos-delay="1600"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </a>
              <a
                href=""
                className="text-2xl"
                data-aos="zoom-in"
                data-aos-delay="1800"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
              <a
                href=""
                className="text-2xl"
                data-aos="zoom-in"
                data-aos-delay="2000"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Colorblur className="opacity-50 left-0 top-20 w-80 h-60 md:w-140 md:bottom-0"></Colorblur>
      <Colorblur className="opacity-50 right-0 -bottom-40 w-80 h-100 md:w-80 md:bottom-0"></Colorblur>
    </section>
  );
};

export default AboutSection;
