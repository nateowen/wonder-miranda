import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/all'
import Splitting from 'splitting';
import { Player } from '@lottiefiles/react-lottie-player';
import { BG3, Miranda, Spirits, BG2, Prospero } from './backgrounds/actOne/one';
import { FG1 } from './foregrounds/actOne/one'
import Foreground from './components/foreground';

gsap.registerPlugin(ScrollTrigger);
Splitting();

function App() {
  const app = useRef();

  // 3D Hover Effect
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {scale: 1.2, duration: 1.5, cursor: 'pointer'});
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {scale: 1, duration: 1.5});
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const fadeInElements = self.selector('.fadeIn');
      const fadeOutElements = self.selector('.fadeOut');
      const scaleLgElements = self.selector('.scaleLarge');
      const scaleSmElements = self.selector('.scaleSmall');
      const pinElements = self.selector('.pinned');
      const parallaxElements = self.selector('.parallax');

      parallaxElements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            scrub: true,            
          },
          y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
          ease: 'none',
        });
      });
      fadeInElements.forEach((el) => {
        gsap.fromTo(el, {
          willChange: 'opacity, transform',
          opacity: 0,
        }, {
          opacity: 1,
          ease: 'power4',
          scrollTrigger: {
            trigger: el,
            start: 'bottom top',
            end: 'bottom top-=100%',
            scrub: true,
            // markers: true
          },
        });
      });
      fadeOutElements.forEach((el) => {
        gsap.fromTo(el, {
          willChange: 'opacity, transform',
          opacity: 1,
        }, {
          opacity: 0,
          ease: 'power4',
          scrollTrigger: {
            trigger: el,
            start: 'bottom top',
            end: 'bottom top-=20%',
            scrub: true,
            // markers: true,
          },
        });
      });
      scaleLgElements.forEach((el) => {
        gsap.to(el, {
          scale: 1.5,
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom center',
            scrub: true,
          }
        });
      });
      scaleSmElements.forEach((el) => {
        gsap.to(el, {
          scale: 0.75,
          scrollTrigger: {
            trigger: el,
            start: 'center bottom',
            end: 'bottom center',
            scrub: true,
          }
        });
      });
      pinElements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            // markers: true,
          }
        });
      });
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className='app'>
      <div className="parallax" data-speed='0.4'>
        <Foreground></Foreground>
      </div>
      <div className="background-container">
        <div className="bg-1">
          {/* <div className="rain"></div> */}
        </div>
        <div className="bg-2"></div>
        <div className="bg-1"></div>
        <div className="bg-4"></div>
        <div className="bg-5"></div>
        <div className="bg-6"></div>
        <div className="bg-9"></div>
        <div className="bg-9"></div>
        <div className="bg-12"></div>
        <div className="bg-15"></div>
        <div className="bg-16"></div>
        <div className="bg-17"></div>
        <div className="bg-18"></div>
      </div>
    </div>
    // <div ref={app} className='app'>
    //   <div className="bg-1 section">
    //     <div className='rain'>
    //       <div className="parallax bg-1-section" data-speed='0.5'>
    //         <h1>Wonder, Miranda</h1>
    //       </div>

    //       <div className="parallax bg-1-section" data-speed='0.5'>
    //         <h2>Act I</h2>
    //         <h2>Scene I</h2>
    //       </div>

    //       <div className="parallax bg-1-section" data-speed='0.5'>
    //         <h5>"O, I have suffered</h5>
    //         <h5>with those that I saw suffer!"</h5>
    //         <p>Shakespeare's The Tempest 1.2-5.6</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="section" id='bg-2'>
    //     <img src={BG2} alt="Miranda"/>
    //     {/* <Player src={Miranda} autoplay loop speed={0.5}></Player> */}
    //   </div>

    //   <div className="section bg-1">
    //     <div className="parallax bg-3-section">
    //       <p>You feel the storm more</p>
    //       <p>than you see it.</p>
    //     </div>
    //     <div className="parallax bg-3-section">
    //       <p>Anguish, fear, and a</p>
    //       <p>hot, familiar rage.</p>
    //     </div>

    //     <div className="parallax bg-3-section">
    //       <Player src={FG1} autoplay loop speed={0.5} style={{width:'50%'}}></Player>
    //     </div>

    //     <div className="parallax bg-3-section">
    //       <p>Your father raises his voice,</p>
    //       <p>and he is obeyed.</p>
    //     </div>

    //     <div className="pinned bg-3-pinned">
    //     <Player src={Spirits} autoplay loop speed={0.5}></Player>
    //       {/* <Player src={Prospero} autoplay loop speed={0.5}></Player> */}

    //       <div className="fadeOut bg-3-pinned-content">
    //         <p>Anger is his power.</p>
    //         <p>To be loved means to submit.</p>
    //       </div>

    //       <div className="fadeIn bg-3-pinned-content">
    //         <p>After all-</p>
    //       </div>
    //     </div>

    //   </div>

    //   <div className="section" id="bg-4"></div>
    //   <div className="section" id="bg-5"></div>
    //   <div className="section" id="bg-6"></div>
    //   <div className="section" id="bg-9"></div>
    //   <div className="section fade-to-purple" id="bg-9"></div>
    //   <div className="section" id="bg-12"></div>
    //   <div className="section" id="bg-15"></div>
    //   <div className="section" id="bg-16"></div>
    //   <div className="section" id="bg-17"></div>
    //   <div className="section" id="bg-18"></div>

    // </div>
  )
}

export default App
