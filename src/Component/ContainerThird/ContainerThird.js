import React, {useEffect, useRef} from 'react';
import estilos from './ContainerThird.scss';
import gsap from 'gsap'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Dimension from '../../Dimension';
import img1a from '../../img/3a.webp';
import img1b from '../../img/3b.webp';
import img2a from '../../img/4a.webp';
import img2b from '../../img/4b.webp';
import img3a from '../../img/5a.webp';
import img3b from '../../img/5b.webp';
import img4a from '../../img/6a.webp';
import img4b from '../../img/6b.webp';

const sections =[
    { 
        imagBig: img1a,
        imgSmall: img1b,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },

    { 
        imagBig: img2a,
        imgSmall: img2b,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    { 
        imagBig: img3a,
        imgSmall: img3b,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    { 
        imagBig: img4a,
        imgSmall: img4b,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },

]
function ContainerThird (){
    const { height, width } = Dimension();
    //alert(width)
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline();


    const revealRefs = useRef([]);
    revealRefs.current=[];





    useEffect(()=>{

        revealRefs.current.forEach((el,index)=>{
           
                              gsap.to(`#pContent${index+1}`, {
                                    yPercent: width > 991.98 ? -100 : -10 ,
                                    ease: "none",
                                    scrollTrigger: {
                                      trigger: el,
                                    
                                      start: width > 991.98 ?"top bottom" :"top center" , // the default values
                                      // end: "bottom top",
                                      scrub: true,
                                      id: `section-${index+1}`,
                                      //markers:true,
                                    }, 
                                    
                                  })
                                  
                                  tl.to(`#pImage${index+1}`, {
                                        yPercent: 20,
                                        ease: "none",
                                        scrollTrigger: {
                                          trigger: el,
                                          // start: "top bottom", // the default values
                                          // end: "bottom top",
                                          scrub: true,
                                          id: `section-${index+1}`,
                                         // markers:true,
                                        }, 
                                      })
            
        });


    },[])

    const addTorefs  = (el)=>{
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el);
        }
    }

    return(
        <div class="container-fluid third">
            <div class="col-12 title">
                <h4>Surf Pictures</h4>
            </div>
{
        sections.map(({imgSmall,imagBig, title}, index) => {
            console.log(index);
            return(

                <div key={title} class="pSection" ref={addTorefs}>
                    <div class="container">
                        {
                           index%2 == 0  ? 
                           <div class="pContent par" id={`pContent${index+1}`} >
                                <p class="textSub">{title}</p>
                                <p class="textSub" >Lorem Ipsum has been the industry's <a href="https://greensock.com" target="_blank">sitio web.</a></p>
                            </div>
                        :   
                            <div class="pContent" id={`pContent${index+1}`} >
                                <p class="textSub">{title}</p>
                                <p class="textSub" >Lorem Ipsum has been the industry's <a href="https://greensock.com" target="_blank">sitio web.</a></p>
                            </div>
                        }
                        
                    </div>
                {
                    index%2 == 0  ? 
                    <>
                        <img class="pImage d-sm-none d-none d-md-block imgPar" id={`pImage${index+1}`} src={imagBig} alt="Filler image" />
                        <img class="pImage d-block d-sm-block d-md-none imgPar" id={`pImage${index+1}`} src={imgSmall} alt="Filler image"/>
                    </>
                    :
                    <>
                        <img class="pImage d-sm-none d-none d-md-block" id={`pImage${index+1}`} src={imagBig} alt="Filler image" />
                        <img class="pImage d-block d-sm-block d-md-none" id={`pImage${index+1}`} src={imgSmall} alt="Filler image"/>
                    </>
                }
                    
                </div>

            )
        })
    }
            
            
        </div>
    )
}

export default ContainerThird;