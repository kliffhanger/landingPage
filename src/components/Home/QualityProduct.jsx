import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
    Swiper,
} from 'swiper';

import {EffectCreative} from 'swiper/modules'

Swiper.use([EffectCreative]);


import ProdImg1 from '../../assets/images/hero/section2-Car-1.jpg';
import ProdImg2 from '../../assets/images/hero/section2-Car-2.jpg';
import ProdImg3 from '../../assets/images/hero/section2-Car-3.jpg';
import ProdImg4 from '../../assets/images/hero/section2-Car-4.jpg';
import ProdImg5 from '../../assets/images/hero/section2-Car-5.jpg';
import ProdImg6 from '../../assets/images/hero/section2-Car-6.jpg';


const QualityProducts = () => {
    useEffect(() => {
        let slideVerticalOffset = 20;
        let isMobile = false;
        // Initialization code for Swiper can be placed here
        const qualityProductsSwiper = new Swiper(".quality-products__swiper .swiper", {
            speed: 1000,
            loop: true,
            slidesPerView: "auto",
            grabCursor: true,
            loop: true,
            effect: "creative",
            centeredSlides: true,
            grabCursor: false,
            creativeEffect: {
                prev: {
                    shadow: false,
                    translate: ["-100%", slideVerticalOffset, 0],
                    rotate: [0, 0, -9],
                },
                next: {
                    shadow: false,
                    translate: ["100%", slideVerticalOffset, 0],
                    rotate: [0, 0, 9],
                },
            },
            on: {
                init: function () {
                    let swiperDuration = this.params.speed || this.params.autoplay.delay || 0;
                    document.documentElement.style.setProperty('--animation-duration', swiperDuration + 'ms');
                }
            }
        });

        let qualityProductsSection = document.querySelector('.quality-products__swiper');
        if (qualityProductsSection) {
            let cursor = document.querySelector('.cursor');

            qualityProductsSection.addEventListener("mouseenter", function (event) {
                cursor.style.opacity = 1;
                window.addEventListener('mousemove', handleMouseMove);
            });

            qualityProductsSection.addEventListener("mouseleave", function (event) {
                cursor.style.opacity = 0;
            });


            function handleMouseMove(event) {
                let mouseX = event.clientX;
                let mouseY = event.clientY;

                gsap.to(cursor, {
                    duration: 0.3,
                    left: mouseX,
                    top: mouseY,
                    ease: 'power2.out',
                });
            }
        }

        window.addEventListener('resize', function (e) {
            mediaMobile();
        });

        // Media Query for mobile this will return true or false
        function mediaMobile() {
            if (window.matchMedia('(max-width: 767px)').matches) {
                isMobile = true;
            } else {
                isMobile = false;
            }
        }
    }, []); // Empty dependency array to run the effect only once after initial render


    
    return (
        <section className="quality-products">
        <div className="container">
            <div className="quality-products__meta">
                <h2 className="section-title">Quality Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <div className="quality-products__swiper">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg1} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 1</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg2} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 2</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg3} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 3</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg1} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 4</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg2} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 5</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg3} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 6</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg1} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 1</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg2} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 2</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg3} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 3</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg1} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 4</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg2} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 5</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="product-card">
                            <div className="product-card__thumbnail">
                                <img src={ProdImg3} alt=""/>
                            </div>
                            <div className="product-card__meta">
                                <h3>Client 6</h3>
                                <p>Dubai, United Arab Emirates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor">
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M39.4419 12.6758C40.184 13.4082 40.184 14.5977 39.4419 15.3301L28.0419 26.5801C27.2997 27.3125 26.0944 27.3125 25.3522 26.5801C24.61 25.8477 24.61 24.6582 25.3522 23.9258L35.4103 14L25.3581 4.07422C24.6159 3.3418 24.6159 2.15234 25.3581 1.41992C26.1003 0.6875 27.3056 0.6875 28.0478 1.41992L39.4478 12.6699L39.4419 12.6758Z"
                        fill="black" />
                    <path
                        d="M0.55814 15.3242C-0.184048 14.5918 -0.184048 13.4023 0.55814 12.6699L11.9581 1.41992C12.7003 0.687498 13.9056 0.687498 14.6478 1.41992C15.39 2.15234 15.39 3.3418 14.6478 4.07422L4.5897 14L14.6419 23.9258C15.3841 24.6582 15.3841 25.8477 14.6419 26.5801C13.8997 27.3125 12.6944 27.3125 11.9522 26.5801L0.552202 15.3301L0.55814 15.3242Z"
                        fill="black" />
                </svg>
            </div>
        </div>
    </section>
    );
};

export default QualityProducts;