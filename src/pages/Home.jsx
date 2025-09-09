import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <Features />
      <Products />
    </section>
  );
};

export default Home;
