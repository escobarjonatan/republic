import React from "react";
import Flickity from "react-flickity-component";
import Image from "next/image";
import slideFive from "../../../public/images/slideshow/Fade.jpeg";
import slideFour from "../../../public/images/slideshow/GarlandFront.jpeg";
import slideOne from "../../../public/images/slideshow/Beard.jpeg";
import slideSeven from "../../../public/images/slideshow/Cowboys.jpeg";
import slideSix from "../../../public/images/slideshow/BarberChairs.jpeg";
import slideThree from "../../../public/images/slideshow/ActionShot.jpeg";
import slideTwo from "../../../public/images/slideshow/FullView.jpeg";

const Carousel = () => (
  <Flickity
    className="cursor-pointer overflow-hidden outline-none relative mt-11 text-gray-500"
    options={{ wrapAround: true }}
  >
    <Image src={slideOne} alt="Barber trimming beard" height="960" width="1280" quality="100" />
    <Image src={slideTwo} alt="Inside view of the barbershop" height="960" width="1280" quality="100" />
    <Image src={slideThree} alt="Barbers cutting clients's hair" height="960" width="1280" quality="100" />
    <Image src={slideFour} alt="Outside view of the barbershop" height="960" width="1280" quality="100" />
    <Image src={slideFive} alt="Barbers setting up to cut hair" height="960" width="1280" quality="100" />
    <Image src={slideSix} alt="Empty barbershop chairs" height="960" width="1280" quality="100" />
    <Image src={slideSeven} alt="Dallas Cowboys football game shown in the background" height="960" width="1280" quality="100"  />
  </Flickity>
);

export default Carousel;
