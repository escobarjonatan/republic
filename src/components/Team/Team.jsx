import React from "react";
import Barber from "../Barber/Barber.jsx";
import styles from "./Team.module.css";

const Team = () => (
  <section id="team" className="p-8 mt-11 bg-white rounded-lg shadow">
    <h2 className="font-bold sm:text-3xl text-xl mb-5">
      Our Professional Barbers
    </h2>
    <p className="text-center mb-11 sm:text-xl">
      Click on any of these barbers to schedule your appointment
    </p>
    <div
      className={`grid items-center justify-evenly ${styles["barbers-container"]}`}
    >
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Guillermo"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Jesus Romero"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Jose Ponse"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Josh"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Lalo"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Julio"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="Luis"
      />
      <Barber
        facebook="https://www.facebook.com/"
        instagram="https://instagram.com/"
        name="mike"
      />
    </div>
  </section>
);

export default Team;
