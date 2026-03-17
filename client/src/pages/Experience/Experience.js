import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './Experience.css';
import Particle from "../../Particle";

function Experience() {
    return (
        <section>
            <Container fluid className="experience-section">
                <Particle />
                <Container>
                    <h1 className="section-header fade-in">
                        <span className="highlight-color">EXPERIENCE</span>
                    </h1>

                    <div className="timeline">
                        {/* Jacobs Technion-Cornell Institute */}
                        <a href="https://tech.cornell.edu/jacobs-technion-cornell-institute/" target="_blank" rel="noreferrer" className="timeline-item fade-in">
                            <div className="timeline-logo">
                                <img src={process.env.PUBLIC_URL + "/ct.png"} alt="Cornell Tech" />
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>Research Assistant</h3>
                                    <span className="timeline-date">Jacobs Technion-Cornell Institute</span>
                                </div>
                                <span className="timeline-period">Sep 2025 – Present</span>
                                <p className="timeline-description">
                                    Supervised by{" "}
                                    <a href="https://ugupta.com/" target="_blank" rel="noreferrer" className="highlight-link">
                                        Prof. Udit Gupta
                                    </a>
                                    , mentored by{" "}
                                    <a href="https://yueying-lisa-li.org/" target="_blank" rel="noreferrer" className="highlight-link">
                                        Yueying (Lisa) Li
                                    </a>
                                    . Built high-fidelity simulations (Vidur) and multi-class experimentation pipelines 
                                    to reproduce and benchmark SOTA LLM schedulers like SLOServe and Sarathi.
                                </p>
                            </div>
                        </a>

                        {/* Tencent */}
                        <div className="timeline-item fade-in">
                            <a href="https://www.tencent.com/en-us/" target="_blank" rel="noreferrer" className="timeline-logo">
                                <img src={process.env.PUBLIC_URL + "/tencent.png"} alt="Tencent" />
                            </a>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>Database Kernel Engineer</h3>
                                    <a href="https://www.tencent.com/en-us/" target="_blank" rel="noreferrer" className="timeline-date">Tencent</a>
                                </div>
                                <span className="timeline-period">May 2025 – Sep 2025</span>
                                <p className="timeline-description">
                                    Core developer of{" "}
                                    <a href="https://cloud.tencent.com/product/tchouse" target="_blank" rel="noreferrer" className="highlight-link">
                                        TCHouse-X
                                    </a>
                                    . Designed admission control mechanisms for system stability. 
                                    Contributed to open-source ClickHouse-X with CI/CD pipelines. 
                                    Optimized fault-tolerant node recovery for distributed clusters.
                                </p>
                            </div>
                        </div>

                        {/* Far Data Lab */}
                        <a href="https://fardatalab.org/" target="_blank" rel="noreferrer" className="timeline-item fade-in">
                            <div className="timeline-logo">
                                <img src={process.env.PUBLIC_URL + "/ut.png"} alt="University of Toronto" />
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>Research Assistant</h3>
                                    <span className="timeline-date">Far Data Lab @ University of Toronto</span>
                                </div>
                                <span className="timeline-period">Jan 2024 – Feb 2025</span>
                                <p className="timeline-description">
                                    Supervised by{" "}
                                    <a href="https://qizhenzhang.me/" target="_blank" rel="noreferrer" className="highlight-link">
                                        Prof. Qizhen Zhang
                                    </a>
                                    . Co-designed{" "}
                                    <a href="https://arxiv.org/abs/2504.05536" target="_blank" rel="noreferrer" className="highlight-link">
                                        dpBento
                                    </a>
                                    {" "}to benchmark heterogeneous DPUs for data processing offload. 
                                    Studied RocksDB internals and explored DPU offload for compute-storage disaggregation.
                                </p>
                            </div>
                        </a>
                    </div>

                    <h1 className="section-header fade-in" style={{marginTop: "80px"}}>
                        <span className="highlight-color">EDUCATION</span>
                    </h1>

                    <div className="timeline">
                        {/* Cornell Tech, Cornell University */}
                        <a href="https://tech.cornell.edu/" target="_blank" rel="noreferrer" className="timeline-item fade-in">
                            <div className="timeline-logo">
                                <img src={process.env.PUBLIC_URL + "/ct.png"} alt="Cornell University" />
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>Master of Science in Computer Science</h3>
                                    <span className="timeline-date">Cornell Tech, Cornell University</span>
                                </div>
                                <span className="timeline-period">Aug 2025 – May 2026</span>
                            </div>
                        </a>

                        {/* University of Toronto */}
                        <a href="https://www.utoronto.ca/" target="_blank" rel="noreferrer" className="timeline-item fade-in">
                            <div className="timeline-logo">
                                <img src={process.env.PUBLIC_URL + "/ut.png"} alt="University of Toronto" />
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>Bachelor of Science in Computer Science</h3>
                                    <span className="timeline-date">University of Toronto</span>
                                </div>
                                <span className="timeline-period">Sep 2020 – May 2024</span>
                            </div>
                        </a>
                    </div>
                </Container>
            </Container>
        </section>
    );
}

export default Experience;

