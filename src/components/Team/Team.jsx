import React from "react";
import Individual from "../Individual/Individual.jsx";

const Team = () => (
  <section id="team" className="p-8 mt-11 bg-white rounded-lg shadow">
    <h2 className="font-bold sm:text-3xl text-xl mb-5">
      Our Professional Barbers
    </h2>
    <p className="text-center mb-11 sm:text-xl">
      Click on any of these barbers to schedule your appointment
    </p>
    <div className="flex items-center flex-col md:flex-row justify-evenly">
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="NewName"
      />
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Jesus Romero"
      />
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Jose Ponse"
      />
    </div>
    <div className="flex items-center flex-col md:flex-row justify-evenly">
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Josh"
      />
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Lalo"
      />
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Julio"
      />
    </div>
    <div className="flex items-center flex-col md:flex-row justify-evenly">
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Luis"
      />
      <Individual
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="mike"
      />
    </div>
  </section>
);

export default Team;
