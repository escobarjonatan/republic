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
    <Image src={slideOne} alt="Barber trimming beard" />
    <Image src={slideTwo} alt="Inside view of the barbershop" />
    <Image src={slideThree} alt="Barbers cutting clients's hair" />
    <Image src={slideFour} alt="Outside view of the barbershop" />
    <Image src={slideFive} alt="Barbers setting up to cut hair" />
    <Image src={slideSix} alt="Empty barbershop chairs" />
    <Image src={slideSeven} alt="Dallas Cowboys football game shown in the background" />
  </Flickity>
);

export default Carousel;
