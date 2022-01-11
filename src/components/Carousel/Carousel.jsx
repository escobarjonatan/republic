/* eslint-disable @next/next/no-img-element */
import React from "react";
import Flickity from "react-flickity-component";

const Carousel = () => (
  <>
    <Flickity className="cursor-pointer overflow-hidden outline-none relative mt-11 text-gray-500">
      <img alt="TODO" className="mx-2" src="http://placecorgi.com/640/480" />
      <img alt="TODO" className="mx-2" src="http://placecorgi.com/640/480" />
      <img alt="TODO" className="mx-2" src="http://placecorgi.com/640/480" />
      <img alt="TODO" className="mx-2" src="http://placecorgi.com/640/480" />
      <img alt="TODO" className="mx-2" src="http://placecorgi.com/640/480" />
      <img alt="TODO" className="mx-2" src="http://placecorgi.com/640/480" />
    </Flickity>
  </>
);

export default Carousel;