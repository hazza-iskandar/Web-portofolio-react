const FooterSection = () => {
  return (
    <footer className="mt-10">
      <div className="container">
        <h1
          className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-9xl text-white/90 font-bold"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          HAZZA LAUZA'I MUADDAB ISKANDAR
        </h1>

        <div className="flex justify-between mt-10">
          <p data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
            @ {new Date().getFullYear()} Hza_Dev
          </p>
          <a
            href="#home"
            className="font-semibold"
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            GO BACK TO TOP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
