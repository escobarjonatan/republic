import React from "react";
import Barber from "../Barber/Barber.jsx";
import styles from "./Team.module.css";
import AlexBotello from "../../public/images/barbers/AlexBotello.jpeg";
import GuillermoEstrada from "../../public/images/barbers/GuillermoEstrada.jpeg";
import JesusRomero from "../../public/images/barbers/JesusRomero.jpeg";
import JoseCardenas from "../../public/images/barbers/JoseCardenas.jpeg";
import JosePonce from "../../public/images/barbers/JosePonce.jpeg";
import JoshuaGerardo from "../../public/images/barbers/JoshuaGerardo.jpeg";
import JulioJuarez from "../../public/images/barbers/JulioJuarez.jpeg";
import MichaelManriquez from "../../public/images/barbers/MichaelManriquez.jpeg";
import VictorHernandez from "../../public/images/barbers/VictorHernandez.jpg";

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
      <Barber name="Julio Juarez" instagram="j_fadethat214" imageUrl={JulioJuarez}/>
      <Barber name="Guillermo Estrada" instagram="_guillermoe" imageUrl={GuillermoEstrada}/>
      <Barber name="Jose Ponce" instagram="jpbarberxx" imageUrl={JosePonce}/>
      <Barber name="Alex Botello"instagram="alexbotello.tv" imageUrl={AlexBotello}/>
      <Barber name="Joshua Gerardo" instagram="joshcutss__" imageUrl={JoshuaGerardo}/>
      <Barber name="Jesus Romero" instagram="j.romero_" imageUrl={JesusRomero}/>
      <Barber name="Michael Manriquez" instagram="blendzbymike" imageUrl={MichaelManriquez}/>
      <Barber name="Victor Hernandez" instagram="vic.cuts" imageUrl={VictorHernandez}/>
      <Barber name="Jose Cardenas" instagram="revivedbylalo" imageUrl={JoseCardenas}/>
    </div>
  </section>
);

export default Team;
