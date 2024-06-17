import React from 'react';
import heroImage from '../../images/bank-tree.jpeg';

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
        <img src={heroImage} alt="Bank Tree" className="hero-image" />
      </section>
    </div>
  );
};

export default Hero;
