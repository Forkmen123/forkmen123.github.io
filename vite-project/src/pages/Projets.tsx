import React from 'react';
import Button from '../components/Button'

const Projets: React.FC = () => {
 
  const paintings = Array.from({ length: 12 }, (_, index) => `/images/peintures/peinture-${index + 1}.jpg`);

 

  return (
    <div className="container-fluid px-5">
      <h2 className="fade-in-down">Mes projets</h2>

      <div className="col-5 mx-5 mb-5 fade-in">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          libero delectus nihil molestias? Eius, repudiandae voluptates? Odit
          repellat harum deserunt beatae. Impedit quasi cupiditate tempore,
          optio vel laudantium illum voluptate provident quam rerum, dignissimos
          necessitatibus, inventore incidunt earum et minus!
        </p>
      </div>

      <p>Filtres</p>
      {/* <Button onClick={() => handleSelection("Peinture")}>Peintures</Button> */}
      <Button>Dessins</Button>
      <Button>Autres</Button>

      <Button color="secondary">Gros / petits formats</Button>

      <div className="row">
        <div className="col-12">
          {paintings.map((painting, index) => (
            <div className="card-columns" key={index}>
              <img
                loading="lazy"
                src={painting}
                alt={`Painting ${index + 1}`}
                className="card img-fluid rounded-1 fade-in my-projects"
                style={{
                  width: "100%",
                  height: "auto",
                  columnCount: "3",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
