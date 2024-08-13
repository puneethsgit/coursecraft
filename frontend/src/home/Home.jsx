import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freecourses from "../components/Freecourses";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freecourses />
      <Footer />
    </div>
  );
}

export default Home;
