import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../layouts/Header";
import AboutSection from "../layouts/AboutSection";
import ProjectsSection from "../layouts/ProjectsSection";
import ContactSection from "../layouts/ContactSection";
import FooterSection from "../layouts/FooterSection";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import LayerLoading from "../components/LayerLoading";

// import SplashCursor from "../components/reactbits/SplashCursor";
function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 10,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {isLoading && <LayerLoading onFinish={() => setLoading(false)} />}

      {!isLoading && (
        <ReactLenis root>
          <Header></Header>
          <AboutSection></AboutSection>
          <ProjectsSection></ProjectsSection>
          <ContactSection></ContactSection>
          <FooterSection></FooterSection>
        </ReactLenis>
      )}
    </>
  );
}

export default App;
