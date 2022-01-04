import MetaHead from '../components/MetaHead/MetaHead.jsx'
import Header from '../components/Header/Header.jsx';
import About from '../components/About/About.jsx';
import Barbers from '../components/Barbers/Barbers.jsx';
import Services from '../components/Services/Services.jsx';
import Team from '../components/Team/Team.jsx';
import Contact from '../components/Contact/Contact.jsx';
import Faq from '../components/Faq/Faq.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Carousel from '../components/Carousel/Carousel.jsx';
import Image from 'next/image';
import hero from '../public/images/hero.jpeg';

const Home = () => {

  const Test = () => (
    <>
      <div class="w-full carousel">
        <div id="slide1" class="relative w-full pt-20 carousel-item">
          <img src="https://picsum.photos/id/500/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="/components/carousel#slide4" class="btn btn-circle">❮</a>
            <a href="/components/carousel#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="relative w-full pt-20 carousel-item">
          <img src="https://picsum.photos/id/501/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="/components/carousel#slide1" class="btn btn-circle">❮</a>
            <a href="/components/carousel#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="relative w-full pt-20 carousel-item">
          <img src="https://picsum.photos/id/502/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="/components/carousel#slide2" class="btn btn-circle">❮</a>
            <a href="/components/carousel#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="relative w-full pt-20 carousel-item">
          <img src="https://picsum.photos/id/503/800/300" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="/components/carousel#slide3" class="btn btn-circle">❮</a>
            <a href="/components/carousel#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <MetaHead />
      <Header />
      <Image
        alt='Republic Barbershop Hero Image'
        height='500px'
        layout='responsive'
        placeholder='blur'
        priority
        quality='100'
        src={hero}
      />
      <div className="max-w-7xl mx-auto text-center px-7">
        <About />
        <Carousel />
        {/* <Barbers /> */}
        <Team />
        {/* <Services /> */}
        <Faq />
        <Contact />
      </div>
      <Footer />


    </>
  )
};

export default Home;

// DOMAIN OPTIONS:
// https://therepublicbarbershop.com/
// http://dallasrepublicbarbershop.com/
// http://dfwrepublicbarbershop.com/
