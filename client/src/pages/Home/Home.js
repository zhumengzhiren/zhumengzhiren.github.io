import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import Seo from "../../Seo";

const description = "Yuanfan Chen is an ML systems researcher working on large-scale model inference, distributed scheduling, and hardware-aware optimization.";

const Home = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

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
                inline: {
                    arrangement: "equidistant"
                },
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

    return (
        <>
            <Seo title="Yuanfan Chen | ML Systems Researcher" description={description} />
            {init && <Particles id="tsparticles" options={options} />}
        </>
    );
};

export default Home;
