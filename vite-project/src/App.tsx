import Button from './components/Button';

function App() {
  const texte_accueil = "Voici mon site internet, où je partage principalement mes peintures à l'huile. Vous y découvrirez une variété de sujets, allant des natures mortes aux paysages en passant par les portraits.";
  const name = "Tommy Roy";

  return (
    <>
      <div className="container-fluid">
        {/* left part */}
        <div className="row" style={{ height: "100vh" }}>
          <div className="left-part col-5 p-5">
            <h1>{name}</h1>
            <div className="float-end mt-5">
              <Button onClick={() => console.log("clicked")}>Contacter</Button>
            </div>
          </div>
          {/* right part */}
          <div className="col p-5 my-5">
            <nav>
              <ul className="nav nav-pills">
                <li className="nav-item">
                    <Button>Projets</Button>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    À propos
                  </a>
                </li>
              </ul>
            </nav>
            <p style={{ width: "25rem" }}>{texte_accueil}</p>
            <img
              src="/images/photos-de-moi/moi-jaune.jpg"
              alt="Photo Tommy Roy"
              className="img-fluid w-25 rounded shadow float-end mt-5"
              style={{ rotate: "5deg" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2>Projets</h2>
        </div>
      </div>
    </>
  );
}

export default App;