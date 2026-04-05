import ScrollVelocity from "../components/reactbits/ScrollVelocity";
import Colorblur from "../components/Colorblur";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section my-10">
      <div className="container">
        {/* title */}
        <div className="mb-5">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            <span
              className="block mb-2 text-gray-500 opacity-90"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              SELECTED
            </span>

            <span
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              WORKS
            </span>
          </h2>
          <p
            className="text-gray-300 mb-2 text-xl"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            Translating complex problems into clean, functional code
          </p>
          <p
            className="text-gray-300 mb-2 text-xl"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="1000"
          >
            A collection of digital solutions built with precision and modern
            stacks.
          </p>
        </div>

        {/* items projest */}
        <div className="block md:flex gap-10 mt-15">
          <a
            href=""
            className="w-full md:w-1/2 p-4 rounded-lg my-5 md:my-0 bg-slate-200/20 border border-white/20 group cursor-pointer flex justify-center relative"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1000"
            target="_blank"
          >
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src="./porto.png"
                alt="web portofolio"
                loading="lazy"
                className="rounded-sm scale-105 group-hover:scale-100 transition-all object-cover"
              />
            </div>

            {/* info */}
            <div className="absolute w-4/5 bg-primary-dark backdrop-opacity-80 backdrop-blur-xl rounded-sm bottom px-4 py-3 bottom-10 shadow-project scale-90 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <h4 className="font-bold text-lg font-instrument">
                Web Portofolio
              </h4>
              <p className="uppercase text-slate-200 opacity-50 my-1">
                WEBSITE
              </p>

              <p className="text-sm mt-2">
                Responsive portfolio website showcasing profile, skills, and
                projects in a professional and modern presentation.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/hazza-iskandar/web-store-livewire"
            className="w-full md:w-1/2 p-4 rounded-lg my-5 md:my-0 bg-slate-200/20 border border-white/20 group cursor-pointer flex justify-center relative"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="1000"
            target="_blank"
          >
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src="./store.png"
                alt="web store"
                loading="lazy"
                className="rounded-sm scale-105 group-hover:scale-100 transition-all object-cover"
              />
            </div>

            {/* info */}
            <div className="absolute w-4/5 bg-primary-dark backdrop-opacity-80 backdrop-blur-xl rounded-sm bottom px-4 py-3 bottom-10 shadow-project scale-90 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <h4 className="font-bold text-lg font-instrument">Zaa Store</h4>
              <p className="uppercase text-slate-200 opacity-50 my-1">
                WEBSITE MARKETPLACE
              </p>

              <p className="text-sm mt-2">
                Digital marketplace platform enabling efficient, secure, and
                user-friendly online transactions.
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* scroll velocity */}
      <div className="my-8 md:my-10 lg:my-16">
        <ScrollVelocity
          texts={[
            "LARAVEL ・ TAILWINDCSS ・ REACT JS ・ CODEIGNITER ・",
            "LARAVEL ・ TAILWINDCSS ・ REACT JS ・ CODEIGNITER ・",
            "LARAVEL ・ TAILWINDCSS ・ REACT JS ・ CODEIGNITER ・",
          ]}
          velocity={20}
          className="custom-scroll-text text-gray-500 text-2xl md:text-4xl lg:text-6xl mt-1 md:my-2.5"
        />
      </div>

      {/* color */}
      <Colorblur className="opacity-50 right-0 top-40 w-20 h-120 md:w-140 md:bottom-0"></Colorblur>
    </section>
  );
};

export default ProjectsSection;
