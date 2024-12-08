import React from "react";
import Profile from "../../assets/home2.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Home.css' ; 

const Home = () => {
  return (
 
    <section className="home section grid">
      <img src={Profile} alt='' className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title"> 
            <span>  I'm Rafik Bannour. </span>    
          </h1>
          <p className="home__description">
          I'm Rafik Bannour, a QA Testing Engineer with a strong passion for web development. With expertise in ensuring the quality and reliability of software, I also enjoy crafting comprehensive web solutions that seamlessly integrate functionality and user experience.

          </p> 
          <Link to='/about' className="button">
            More About Me{' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link> 
        </div>
      </div>

      <div className="color__block">

      </div>
    </section>
    

  );
};

export default Home;
