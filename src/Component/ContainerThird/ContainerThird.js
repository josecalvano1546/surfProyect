import React, {useEffect} from 'react';
import estilos from './ContainerThird.scss';
import gsap from 'gsap'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ContainerThird (){
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.from(".pContent",{
            scrollTrigger: {
              trigger: ".pContent",
              toggleActions:"restart none none none"
            },
            opacity:0,
            x:-40,
            
          });
          gsap.to(".pContent", {
            yPercent: -100,
            ease: "none",
            scrollTrigger: {
              trigger: ".pSection",
            
              //start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true
            }, 
            
          });
          
          gsap.to(".pImage", {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
              trigger: ".pSection",
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true
            }, 
          });
    })

    return(
        <div class="container-fluid third">
            <div class="col-12 title">
                <h4>Surf Pictures</h4>
            </div>
            <div class="pSection">
                <div class="container">
                    <div class="pContent ">
                        <p class="textSub">texto que describa la imagen pero que no sea muy largo</p>
                        <p class="textSub" >Link a la pagina y al dueño de la foto <a href="https://greensock.com" target="_blank">sitio web.</a></p>
                    </div>
                </div>
                
                <img class="pImage" src="https://picsum.photos/1200/526?random=1" alt="Filler image"/>
            </div>
            
        </div>
    )
}

export default ContainerThird;