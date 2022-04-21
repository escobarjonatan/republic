import About from "../components/About/About.jsx";
import BackToTop from "../components/BackToTop/BackToTop.jsx";
import Carousel from "../components/Carousel/Carousel.jsx";
import Contact from "../components/Contact/Contact.jsx";
import Faq from "../components/Faq/Faq.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import MetaHead from "../components/MetaHead/MetaHead.jsx";
import Team from "../components/Team/Team.jsx";

const Home = () => (
  <>
    <MetaHead />
    <Header />
    <Hero />
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
// Add labels
// Cleanup
// Domain claim
// Update readme
