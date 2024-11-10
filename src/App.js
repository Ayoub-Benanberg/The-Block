import AboutUs from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Reputation from "./components/reputation";
import Services from "./components/services";

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Hero/>
      <Reputation/>
      <AboutUs/>
      <Services/>
    </div>
  );
}

export default App;
