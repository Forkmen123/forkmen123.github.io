import { NavLink } from 'react-router-dom';
import React from 'react';
import Button from './Button';

const Footer = () => {
  return (
    <>
      <footer
        className="container-fluid mt-5"
        style={{ backgroundColor: "#2F3061" }}
      >
        <div className="row p-5">
          <div className="col-4">
            <ul style={{ color: "#F7FEF7" }} className="mx-5">
              <p>Accueil</p>
              <p>À propos</p>
            </ul>
          </div>

          <div className="col-4">
            <ul style={{ color: "#F7FEF7" }} className="mx-5">
              <p>Projets</p>
              <li>Peintures</li>
              <li>Dessins</li>
              <li>Autres</li>
            </ul>
          </div>

          <div className="col-4">
            <NavLink to="/contact">
              <Button color="secondary">Contacter</Button>
            </NavLink>

            <div style={{ color: "#F7FEF7" }}>
              <i className="fa-brands fa-facebook mt-5" style={{fontSize: "1.8rem"}}></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer