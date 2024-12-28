import Button from './components/Button'

function App() {
  const texte_accueil = "Voici mon site internet, où je partage principalement mes peintures à l'huile. Vous y découvrirez une variété de sujets, allant des natures mortes aux paysages en passant par les portraits.";
  const name = "Tommy Roy";

  return (
    <>
      <div className="container m-0">
        <div className="row" style={{ height: "100vh" }}>
          <div className="left-part col-6 p-5">
            <h1>{name}</h1>
            <Button onClick={() => console.log("clicked")}>Contacter</Button>
          </div>
          <div className="col-6 p-5">
            <div>{texte_accueil}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;