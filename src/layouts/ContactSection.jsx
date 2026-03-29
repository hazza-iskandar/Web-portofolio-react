import Button from "../components/Button";
import Colorblur from "../components/Colorblur";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="mb-3">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 text-center">
              <span
                className="block mb-3 text-gray-500 opacity-90"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                LET'S TALK
              </span>

              <span
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                ABOUT YOUR IDEAS
              </span>
            </h2>
            <p
              className="text-white mb-2 text-sm md:text-2xl text-center font-semibold uppercase w-full md:w-3/4 mx-auto"
              data-aos="fade-up"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Let’s talk about your ideas and explore how we can transform them
              into meaningful digital solutions. Whether you’re starting from
              scratch or refining an existing concept.
            </p>
          </div>

          {/* form */}
          <form action="" className="w-4/5 mx-auto p-3 mt-7">
            <div className="my-4 mb-6 relative" 
             data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="1000">
              <input
                id="nama"
                type="text"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-md bg-primary-dark text-white 
               focus:outline-none border-2 border-white/40 shadow-white"
              />

              <label htmlFor="nama" className="input-form">
                Nama
              </label>
            </div>

            <div className="my-4 mb-6 relative"
            data-aos="fade-up"
              data-aos-delay="1600"
              data-aos-duration="1000">
              <input
                id="email"
                type="email"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-md bg-primary-dark text-white 
               focus:outline-none border-2 border-white/40 shadow-white"
              />

              <label htmlFor="email" className="input-form">
                Email
              </label>
            </div>

            <div className="my-4 mb-6 relative" 
            data-aos="fade-up"
              data-aos-delay="1800"
              data-aos-duration="1000">
              <input
                id="subject"
                type="text"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 rounded-md bg-primary-dark text-white 
               focus:outline-none border-2 border-white/40 shadow-white"
              />

              <label htmlFor="subject" className="input-form">
                Subject
              </label>
            </div>

            <div className="my-4 mb-6 relative"
            data-aos="fade-up"
              data-aos-delay="2000"
              data-aos-duration="1000">
              <textarea
                id="pesan"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 h-50 rounded-md bg-primary-dark text-white 
               focus:outline-none border-2 border-white/40 shadow-white"
              ></textarea>
              <label htmlFor="nama" className="input-form">
                Pesan
              </label>
            </div>

            <Button className="w-full rounded-lg py-3 font-semibold text-base hover:shadow-white">
              Kirim
            </Button>
          </form>
        </div>
      </div>

      <Colorblur className="opacity-50 left-0 bottom-20 w-40 h-150 md:w-80 md:top-10"></Colorblur>
      <Colorblur className="opacity-50 right-0 bottom-20 w-40 h-80 md:w-80 md:-bottom-60"></Colorblur>
    </section>
  );
};

export default ContactSection;
