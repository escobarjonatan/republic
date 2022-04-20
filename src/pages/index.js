import Image from "next/image";
import About from "../components/About/About.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Faq from "../components/Faq/Faq.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import MetaHead from "../components/MetaHead/MetaHead.jsx";
import Team from "../components/Team/Team.jsx";
import BackToTop from "../components/BackToTop/BackToTop.jsx";
import hero from "../public/images/hero.jpeg";

const Home = () => (
  <>
    <MetaHead />
    <Header />
    <Image
      alt="Republic Barbershop Hero Image"
      height="500px"
      layout="responsive"
      placeholder="blur"
      quality="100"
      src={hero}
    />
    <div className="max-w-7xl mx-auto text-center px-7">
      <About />
      <Carousel />
      <Team />
      <Faq />
      <Contact />
    </div>
    <BackToTop />
    <Footer />
  </>
);

export default Home;

// http://republicbarbershopdtx.com/
// TODO:
// Update readme

// FINAL :
// Update text
// Add labels
// Host Images in the cloud
// Cleanup
// Domain claim

