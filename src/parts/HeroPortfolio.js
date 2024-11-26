/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import byebeo from '../assets/images/Portfolio/bybe_beo.png';

export default function HeroPortfolio() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">Bye Béo</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Tư vấn chiến lược, chạy quảng cáo cho các sản phẩm của Bye Béo
          </p>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12">
        <Fade direction="up" triggerOnce>
          <img src={byebeo} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
