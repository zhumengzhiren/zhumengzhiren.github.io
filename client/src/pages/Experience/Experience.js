import React from "react";
import {Container} from "react-bootstrap";
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
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/ct.png"} alt="Cornell Tech" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">Research Assistant</h3>
                                        <span className="timeline-period">Sep 2025 – Present</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://tech.cornell.edu/jacobs-technion-cornell-institute/" target="_blank" rel="noreferrer">
                                            Jacobs Technion-Cornell Institute
                                        </a>
                                    </span>
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
                                    <div className="timeline-tags">
                                        <span className="timeline-tag">LLM Serving</span>
                                        <span className="timeline-tag">Distributed Scheduling</span>
                                        <span className="timeline-tag">Simulation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tencent */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/tencent.png"} alt="Tencent" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">AI Infra Engineer</h3>
                                        <span className="timeline-period">May 2025 – Sep 2025</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://www.tencent.com/en-us/" target="_blank" rel="noreferrer">
                                            Tencent
                                        </a>
                                    </span>
                                    <p className="timeline-description">
                                        Core developer of{" "}
                                        <a href="https://cloud.tencent.com/product/tchouse" target="_blank" rel="noreferrer" className="highlight-link">
                                            TCHouse-X
                                        </a>
                                        . Designed admission control mechanisms for system stability.
                                        Contributed to open-source ClickHouse-X with CI/CD pipelines.
                                        Optimized fault-tolerant node recovery for distributed clusters.
                                    </p>
                                    <div className="timeline-tags">
                                        <span className="timeline-tag">OLAP Database</span>
                                        <span className="timeline-tag">Distributed Systems</span>
                                        <span className="timeline-tag">Fault Tolerance</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Far Data Lab */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/ut.png"} alt="University of Toronto" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">Research Assistant</h3>
                                        <span className="timeline-period">Jan 2024 – Feb 2025</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://fardatalab.org/" target="_blank" rel="noreferrer">
                                            Far Data Lab, University of Toronto
                                        </a>
                                    </span>
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
                                    <div className="timeline-tags">
                                        <span className="timeline-tag">DPU</span>
                                        <span className="timeline-tag">Benchmarking</span>
                                        <span className="timeline-tag">Storage Systems</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="section-header fade-in" style={{marginTop: "60px"}}>
                        <span className="highlight-color">EDUCATION</span>
                    </h1>

                    <div className="timeline">
                        {/* Cornell Tech */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/ct.png"} alt="Cornell University" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">M.Eng. in Computer Science</h3>
                                        <span className="timeline-period">Aug 2025 – May 2026</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://tech.cornell.edu/" target="_blank" rel="noreferrer">
                                            Cornell Tech, Cornell University
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* University of Toronto */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/ut.png"} alt="University of Toronto" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">B.Sc. in Computer Science</h3>
                                        <span className="timeline-period">Sep 2020 – May 2024</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://www.utoronto.ca/" target="_blank" rel="noreferrer">
                                            University of Toronto
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        </section>
    );
}

export default Experience;
