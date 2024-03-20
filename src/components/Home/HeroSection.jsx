import React, {useState, useRef, useLayoutEffect, useEffect} from "react";
import {gsap} from "gsap";

import SliderImg1 from '../../assets/images/banner/BannerSlider-1.jpg';
import SliderImg2 from '../../assets/images/banner/BannerSlider-2.jpg';
import SliderImg3 from '../../assets/images/banner/BannerSlider-3.jpg';
import SliderImg4 from '../../assets/images/banner/BannerSlider-4.jpg';

const  HeroSection = () =>{
  const [state, setState] = useState({ current: 0, next: 1 });

  const [progress, setProgress] = useState(0);

  let headerElems = useRef([null, null, null, null]); // Initialize with nulls for each h2 and h3 element


  let timer = null;
  let elems = useRef([]);
  let timeline = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power3.inOut"
    },
    paused: true
  });

  const gallery = [
    {
      title: "Welcome To TenTwenty Farms",
      subtitle1: 'From our Farms',
      subtitle2: ' to your hands',
      cover: SliderImg1
    },
    {
      title: "Welcome To TenTwenty Farms",
      subtitle1: 'From our Farms',
      subtitle2: ' to your hands',
      cover: SliderImg2
    },
    {
      title: "Welcome To TenTwenty Farms",
      subtitle1: 'From our Farms',
      subtitle2: ' to your hands',
      cover: SliderImg3
    },
    {
      title: "Welcome To TenTwenty Farms",
      subtitle1: 'From our Farms',
      subtitle2: ' to your hands',
      cover: SliderImg4
    }
  ];

  const activateTimer = () => {
    timer = setTimeout(() => {
      stepForward();
    }, 6000);
  };
  const calculateIndexs = (index) => {
    if (index === gallery.length - 1) {
      setState({ current: index, next: 0 });
    } else {
      setState({ current: index, next: index + 1 });
    }
  };

  const flowUp = (onComplete) => {
    timeline
      .to(elems.current[0], { opacity: 0, scale: 0.5 })
      .to(
        elems.current[1],
        {
          y: "0%",
          opacity: 1,
          scale: 1,
          onComplete
        },
        "-=0.75"
      )
      
      .play();
      gsap.fromTo(
        headerElems.current[state.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
      );
    
      gsap.fromTo(
        headerElems.current[state.next],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
      );
  };

  const handleChange = () => {
    clearTimeout(timer);
    flowUp(() => calculateIndexs(state.next));
    setProgress(0)
  };
  const changeSlide = () => {
    clearTimeout(timer);
    flowUp(() => calculateIndexs(state.next));
  };

  const stepForward = () => {
    flowUp(() => calculateIndexs(state.next));
  };

  useLayoutEffect(() => {
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];

    activateTimer();

    gsap.set(image2, { y: "50%", opacity: 0, scale: 0.5 });
    gsap.set(image1, { y: "0%", opacity: 1, scale: 1 });

     // Update progress bar
     
     const interval = setInterval(() => {
        if (progress < 600) {
          setProgress(progress + 1);
        } else {
          setProgress(0); 
          changeSlide();
        }
      }, 15); 

    return () => {
      clearTimeout(timer);
     clearInterval(interval);
    };
  }, [state, progress]);


  console.log(state.current)
       
    return (
            <section className="hero">
            <div className="hero-carousel">
                <div className="carousel-slide">
                    <div className="carousel-slide__image">
                        <img ref={(elem) => (elems.current[0] = elem)} src={gallery[state.current].cover} alt="Banner Slider Image" />
                    </div>
                    <div className="carousel-slide__caption">
                        <div className="container">
                            <h2 ref={(elem) => (headerElems.current[0] = elem)} className="carousel-slide__caption__subtitle">{gallery[state.current].title}</h2>
                            <h3  ref={(elem) => (headerElems.current[1] = elem)} className="carousel-slide__caption__title">{gallery[state.current].subtitle1}<br/>{gallery[state.current].subtitle2}</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-slide">
                    <div className="carousel-slide__image">
                        <img ref={(elem) => (elems.current[1] = elem)} src={gallery[state.next].cover} alt="Banner Slider Image" />
                    </div>
                    <div className="carousel-slide__caption">
                        <div className="container">
                            <h2 ref={(elem) => (headerElems.current[2] = elem)} className="carousel-slide__caption__subtitle">{gallery[state.next].title}</h2>
                            <h3 ref={(elem) => (headerElems.current[3] = elem)} className="carousel-slide__caption__title">{gallery[state.current].subtitle1}<br/>{gallery[state.current].subtitle2}</h3>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="hero-carousel--nav">
                <div className="container">
                    <div className="hero-carousel--nav__controls">
                        <div className="square-box-wrapper" onClick={handleChange}>
                            <div className="square-box">
                                <div className="hero-carousel--nav__controls__progress">
                                    <svg width="138" height="138" viewBox="0 0 138 138" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.3" x="0.5" y="0.5" width="137" height="137" stroke="#EEF4F9" />
                                    </svg>
                                    <svg className="progress-bar" width="146" height="146" viewBox="0 0 146 146" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="4" width="138" height="138" stroke="#fff" strokeWidth="8" strokeDasharray="600" strokeDashoffset={600 - progress}/>
                                    </svg>
                                </div>
                                <div className="carousel-control" >
                                    <img src={gallery[state.next].cover} alt="Banner prev Slider Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-carousel--nav__pagination">
                        <div className="current-slide">0{state.current + 1}</div>
                        <div className="divider"></div>
                        <div className="total-slides">0{gallery.length}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;