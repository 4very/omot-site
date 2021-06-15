import Particles from 'react-particles-js';

export default function Home() {
  return (
    <>
      <Particles
        className="absolute h-screen w-screen z-0"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: `#ffffff`,
            },
            shape: {
              type: `circle`,
              stroke: {
                width: 2,
                color: `#000000`,
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: `img/github.svg`,
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: `#ffffff`,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: `none`,
              random: false,
              straight: false,
              out_mode: `out`,
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: `canvas`,
            events: {
              onhover: {
                enable: true,
                mode: `bubble`,
              },
              onclick: {
                enable: false,
                mode: `remove`,
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 5,
                duration: 1,
                opacity: 0.5194473080642205,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="h-screen w-screen bg-background flex items-center justify-center z-10 text-center">
        <h1 className="text-5xl text-text">Website currently in development</h1>
      </div>
    </>
  );
}
