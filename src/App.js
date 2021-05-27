import React, { Suspense, useEffect } from 'react';
import './App.scss';
import Loading from './Component/Loading/Loading';
// import gsap from 'gsap'; 
// import {ScrollToPlugin} from "gsap/ScrollToPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import  ContainerFirst from './Component/ContainerFirst/ContainerFirst';
// import ContainerSecond from './Component/ContainerSecond/ContainerSecond';
// import ContainerThird from './Component/ContainerThird/ContainerThird';


//const ContainerFirst = React.lazy(() => import('./Component/ContainerFirst/ContainerFirst'));
//const ContainerSecond = React.lazy(() => import('./Component/ContainerSecond/ContainerSecond'));
//const ContainerThird= React.lazy(() => import('./Component/ContainerThird/ContainerThird'));
const FirstContent = React.lazy(() => import('./Component/FirstContent/FirstContent'));


function App() {
  // gsap.registerPlugin( ScrollToPlugin );
  // gsap.registerPlugin(ScrollTrigger);

  return (
    <Suspense fallback={
      <Loading/>
    }>
    {/* // <div>
    //   <section id="containerFirst">
    //     <ContainerFirst/>
    //   </section>

    //   <section id="containerSecond">
    //     <ContainerSecond/>
    //   </section>

    //   <section id="containerThird">
    //     <ContainerThird/>
    //   </section>
    //   </div> */}
      <FirstContent/>

    </Suspense>
  );
}



export default App;
