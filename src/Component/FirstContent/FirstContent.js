import React from 'react';
import './../../App.scss';
import gsap from 'gsap'; 
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import  ContainerFirst from './../../Component/ContainerFirst/ContainerFirst';
import ContainerSecond from './../../Component/ContainerSecond/ContainerSecond';
import ContainerThird from './../../Component/ContainerThird/ContainerThird';
import Fotter from './../ContainerThird/Footer/Footer'

function FirstContent() {
  gsap.registerPlugin( ScrollToPlugin );
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div>
      <section id="containerFirst">
        <ContainerFirst/>
      </section>

      <section id="containerSecond">
        <ContainerSecond/>
      </section>

      <section id="containerThird">
        <ContainerThird/>
      </section>

      <Fotter/>
    </div>

  );
}

export default FirstContent;