import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import expData from "./data";

const expCards = expData.map((exp) => {
  return (
    <Card
      key={exp.id}
      {...exp}
    />
  );
});

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <section className="cards-list">{expCards}</section>
    </div>
  );
}

export default App;
