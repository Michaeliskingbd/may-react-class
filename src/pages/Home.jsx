import { useEffect, useState } from "react";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Useeffect is working", count);
  }, []);
  //Dependency Array
  return (
    <section>
      <Navbar />
      <HeroSection />
      <Features />
      <button onClick={() => setCount(count + 1)}>Add</button>
    </section>
  );
};

export default Home;
