import AboutUs from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Reputation from "./components/reputation";

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Hero/>
      <Reputation/>
      <AboutUs/>
    </div>
  );
}

export default App;
