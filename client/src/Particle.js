import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadFull(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const baseEmitterConfig = (direction, position) => {
        return {
            direction,
            rate: {
                quantity: 15,
                delay: 0.3
            },
            size: {
                width: 0,
                height: 0
            },
            spawnColor: {
                value: "#ff0000",
                animation: {
                    h: {
                        enable: true,
                        offset: {
                            min: -1.4,
                            max: 1.4
                        },
                        speed: 2,
                        sync: false
                    },
                    l: {
                        enable: true,
                        offset: {
                            min: 40,
                            max: 60
                        },
                        speed: 0,
                        sync: false
                    }
                }
            },
            position
        };
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    // value: "#add8e6",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {

                color: {
                    value: "random",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: { min: 0.3, max: 0.7 },
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        top: "none",
                        default: "destroy"
                    },
                    random: false,
                    speed: { min: 1, max: 3 },
                    straight: false,
                    decay: 0.01
                },
                number: {
                    value: 0,
                    limit: 30
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: ["circle", "square", "triangle"]
                },
                size: {
                    value: { min: 3, max: 7 },
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360
                    },
                    direction: "random",
                    animation: {
                        enable: true,
                        speed: 60
                    }
                },
                tilt: {
                    direction: "random",
                    enable: true,
                    value: {
                        min: 0,
                        max: 360
                    },
                    animation: {
                        enable: true,
                        speed: 60
                    }
                },
                roll: {
                    darken: {
                        enable: true,
                        value: 25
                    },
                    enable: true,
                    speed: {
                        min: 15,
                        max: 25
                    }
                },
                wobble: {
                    distance: 30,
                    enable: true,
                    speed: {
                        min: -15,
                        max: 15
                    }
                }

            },
            detectRetina: true,
            emitters: [
                baseEmitterConfig("top-right", { x: 0, y: 30 }),
                baseEmitterConfig("top-left", { x: 100, y: 30 })
            ]

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

export default Particle;