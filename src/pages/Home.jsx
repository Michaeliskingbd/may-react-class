import React, { Suspense } from "react";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Loader from "../components/utils/Loader";
import { FloatButton } from "antd";

const Products = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Products"));
    }, 5000);
  });
});

// const Products = lazy(() => import("../components/Products"));

const Home = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <Features />
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
      <FloatButton.BackTop visibilityHeight={0} />
    </section>
  );
};

export default Home;
