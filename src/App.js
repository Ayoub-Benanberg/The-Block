import AboutUs from "./components/about";
import Ad from "./components/ads";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Reputation from "./components/reputation";
import Services from "./components/services";
import Stats from "./components/stats";


function App() {
  return (
    <div className="App font-sans">
      <Navbar/>
      <Hero/>
      <Reputation/>
      <AboutUs/>
      <Services/>
      <Stats/>
      <Ad/>
      <Projects/>
    </div>
  );
}

export default App;
