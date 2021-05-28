import React,{useEffect, Suspense, useRef } from 'react';
import estilos from './ContainerSecond.scss';
import image1 from '../../img/img1.webp'
import image2 from '../../img/img2.webp'
import image3 from '../../img/img3.webp'
import gsap,{Power3, Power0} from 'gsap'; 
import Card from './Card/Card';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import Loading from '../../Component/Loading/Loading';

//const Card = React.lazy(() => import('./Card/Card'));
function ContainerFirst () {

    gsap.registerPlugin(ScrollTrigger);

    let prueba = useRef(null);
   

    useEffect(()=>{
        gsap.from(".prueba",{
            scrollTrigger:{ 
                trigger:".prueba", // start the animation when ".box" enters the viewport (once)
                start:"-500 center",
                //markers:true,
                toggleActions:"restart none none none"
            },
            y:400, 
            stagger:{
                amount:0.2,
                from:"center"
        }}
        )
    },[])

    

 return(
 
    <div class="container-fluid second">
 
        <div class="col-12 title">
            <h4>World's Best Surf Destinations</h4>
        </div>
      <div class="row justify-content-center subSec ">
        <div class="col-8  subtitleSecond d-none d-md-block">
            <p>There are a whole lot of surf destinations around the world with fun waves. Beach breaks, point breaks, reef breaks, barrels, beginner waves and beyond – the world is full of all types of waves for all types of abilities and styles.  </p>
        </div>
        </div>
        <div class="row align-items-center section2"
        >
          <Card foto={image1} descripcion={'Uluwatu'} subDes={'Bali'}/>   
          <Card foto={image2} descripcion={'Santa Teresa'} subDes={'Costa Rica'}/>
          <Card foto={image3} descripcion={'Pipeline'} subDes={'Hawaii'}/>
        </div>
    </div>

 )
}
export default ContainerFirst