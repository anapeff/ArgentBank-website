import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Feature from '../../components/Feature/Feature';
import Footer from '../../components/Footer/Footer';


import '../../App.css'; 

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  );
};

export default Home;