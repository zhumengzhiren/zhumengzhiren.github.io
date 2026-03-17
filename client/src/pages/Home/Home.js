import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Home = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadFull(engine);
            await loadAll(engine);
            //await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            pauseOnBlur: false,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble"
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 40,
                        duration: 2,
                        opacity: 8,
                        size: 6,
                        speed: 3
                    }
                }
            },
            particles: {
                color: {
                    // value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"]
                    value: "#ff0000",
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: true
                    }
                },

                links: {
                    color: "random",
                    distance: 40,
                    enable: true,
                    opacity: 0.8,
                    width: 1
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "bounce",
                    speed: 1
                },
                number: {
                    value: 200
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 2,
                        sync: false
                    },
                    value: { min: 0.3, max: 0.8 }
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 1
                }
            },
            polygon: {
                draw: {
                    enable: true,
                    stroke: {
                        color: "#fff",
                        opacity: 0.2,
                        width: 1
                    }
                },
                enable: true,
                move: {
                    radius: 5
                },
                // // For mc
                // position: {
                //     x: 80,
                //     y: 100
                // },
                inline: {
                    arrangement: "equidistant"
                },
                // // For mc
                // scale: 1.5,
                scale: 0.5,
                type: "inline",
                url: process.env.PUBLIC_URL + "/smalldeer.svg"
            },
            background: {
                color: "#000000",
                image: "",
                position: "50% 50%",
                repeat: "no-repeat",
                size: "cover"
            }
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default Home;