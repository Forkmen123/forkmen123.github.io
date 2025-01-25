import { motion, useAnimation} from 'framer-motion';
import React, {useEffect, useState} from 'react';
import moijaune from '/images/photos-de-moi/moi-jaune.jpg'



const Home = () => {
  const texte_accueil =
    "Voici mon site internet, où je partage principalement mes peintures à l'huile. Vous y découvrirez une variété de sujets, allant des natures mortes aux paysages en passant par les portraits.";

  const name = "Tommy Roy";

  return (
    <>
      <div className="container-fluid px-5">
        {/* left part */}
        <section className="row" style={{ height: "110vh" }}>
          <div className="left-part col-5 p-5 mt-4">
            <h1 className="fade-in-down">{name}</h1>
          </div>

          {/* right part */}
          <div className="col p-5 my-5">
            <p style={{ width: "20rem" }} className="fade-in">
              {texte_accueil}
            </p>
            <img
              src={moijaune}
              alt="Photo Tommy Roy"
              className="img-fluid w-25 rounded shadow float-end mt-5 slide-in-right"
              style={{ rotate: "5deg" }}
            />
          </div>
        </section>

        {/* Projets récents */}
        <section className="container-fluid">
          <div className="row p-5" style={{ height: "100vh" }}>
            <div className="col-7 mt-5">
              <h2 className="sticky-top py-5" style={{ top: "20px" }}>
                Projets récents
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img src="./public/images/peintures/peinture-1.jpg" alt="" loading="lazy" className="img-fluid my-projects rounded"/>Nom de la peinture 1 
            </div>
            <div className="col">
              <img src="./public/images/peintures/peinture-7.jpg" alt="" loading="lazy" className="img-fluid my-projects rounded"/>Nom de la peinture 2
            </div>
            <div className="col">
              <img src="./public/images/peintures/peinture-10.jpg" alt="" loading="lazy" className="img-fluid my-projects rounded"/>Nom de la peinture 3
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home