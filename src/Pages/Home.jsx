import React from "react";
import Properties from "../component/Properties/Properties";
import Banner from "../component/Banner/Banner";

import { Helmet } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
AOS.init();

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MoonMart | Home</title>
      </Helmet>
      <Banner></Banner>
      <Properties></Properties>
      
     
    </div>
  );
};

export default Home;
