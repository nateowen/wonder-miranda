import '../index.css'
import { useRef, useLayoutEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FG1 } from '../foregrounds/actOne/one';
import { gsap } from 'gsap'
import { Spirits } from '../backgrounds/actOne/one';

function Foreground() {
    const ref = useRef();

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
                start: 'bottom top',
                pin: true,
                pinSpacing: false,
                // markers: true,
              }
            });
          });
        }, ref);
        return () => ctx.revert();
      }, []);

    return (
        <div className="foreground-container" ref={ref}>
            <div className="title-section">
                <h1>Wonder, Miranda</h1>
            </div>

            <div className="title-section">
                <h2>Act I</h2>
            </div>

            <div className="title-section">
                <h4>"O, I have suffered</h4>
                <h4>with those that I saw suffer!"</h4>
                <p>Shakespeare's The Tempest 1.2-5.6</p>
            </div>

            <div className="title-section">
                <h2>Scene I</h2>
            </div>

            <div className="miranda-lottie"></div>

            <div className="text-content">
                <p>You feel the storm more</p>
                <p>than you see it.</p>
            </div>
            <div className="text-content">
                <p>Anguish, fear, and a</p>
                <p>hot, familiar rage.</p>
            </div>

            <div className="fg-1">
                <Player autoplay loop src={FG1} speed={0.5}></Player>
            </div>

            <div className="break-50"></div>

            <div className='text-content'>
                <p>Your father raises his voice,</p>
                <p>and he is obeyed.</p>
            </div>

            <div className="pinned prospero-spirits">
                <Player src={Spirits} autoplay loop speed={0.5}></Player>
                {/* <Player src={Spirits} autoplay loop speed={0.5}></Player> */}
            </div>
        </div>
    )
}

export default Foreground