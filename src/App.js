import "./App.css";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import Slider from "./componets/slider/Slider";
import Virtual from "./componets/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
    </div>
  );
}

export default App;
