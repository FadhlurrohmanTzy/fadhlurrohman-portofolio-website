// import React from 'react';
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hallo, <span>Nama saya</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Fafa</span> Tzy
          </h1>

          <p className="home__job">
            <span className="text-cs">Saya adalah seorang</span>{" "}
            <b>Web Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                3 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Tahun <span>Pengalaman</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">5</span>

              <span className="text-sm text-cs">
                Project Di <span>Selesaikan</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            Dari Indonesia, Kota Bogor. Saya memiliki pengalaman yang kaya
            sebagai pengembang website. Saya senang berbicara dengan Anda
            tentang keunikan kita.
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaInstagramSquare />
            </a>
            <a href="" className="home__social-link">
              <IoLogoDiscord />
            </a>
            <a href="" className="home__social-link">
              <FaWhatsappSquare />
            </a>
          </div>

          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download CV
            </a>

            <a href="" className="hero__link text-cs">
              Keahlian Ku
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
