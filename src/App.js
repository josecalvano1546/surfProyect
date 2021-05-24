import React, { Suspense } from 'react';

import './App.scss';
import Loading from './Component/Loading/Loading';
import gsap from 'gsap'; 
import {Button} from 'react-bootstrap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

const ContainerFirst = React.lazy(() => import('./Component/ContainerFirst/ContainerFirst'));
const ContainerSecond = React.lazy(() => import('./Component/ContainerSecond/ContainerSecond'));
const ContainerThird= React.lazy(() => import('./Component/ContainerThird/ContainerThird'));

function App() {
  gsap.registerPlugin( ScrollToPlugin );

  // document.querySelectorAll("nav button").forEach((btn, index) => {
  //   btn.addEventListener("click", () => {
  //       console.log("index -->" + (index + 1))
  //     gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1)}});
  //   });
  // });

  // Detect if a link's href goes to the current page

  return (
    <Suspense fallback={
      <Loading/>
    }>
      <section id="containerFirst">
        <ContainerFirst/>
      </section>

      <section id="containerSecond">
        <ContainerSecond/>
      </section>

      <section id="containerThird">
        <ContainerThird/>
      </section>
   
    </Suspense>
  );
}



export default App;
