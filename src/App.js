import "./App.css";
// import Footer from "./componets/Footer/Footer";
import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";
import Products from "./componets/products/Products";
import Slider from "./componets/slider/Slider";
import Testimonials from "./componets/testimonials/Testimonials";
import Virtual from "./componets/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
