import React from "react";
import {Container} from "react-bootstrap";
import './Experience.css';
import Particle from "../../Particle";
import Seo from "../../Seo";

function Experience() {
    return (
        <section>
            <Seo
                title="Experience | Yuanfan Chen"
                description="Engineering, research, and education experience of Yuanfan Chen across Character.AI, Cornell Tech, Tencent, and the University of Toronto."
                path="/experience"
            />
            <Container fluid className="experience-section">
                <Particle />
                <Container>
                    <h1 className="section-header fade-in">
                        <span className="highlight-color">EXPERIENCE</span>
                    </h1>

                    <div className="timeline">
                        {/* Character.AI */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/characterai.png"} alt="Character.AI" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">Machine Learning System Researcher/Architect</h3>
                                        <span className="timeline-period">Aug 2026 – Present</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://character.ai/" target="_blank" rel="noreferrer">
                                            Character.AI: Inference, Training &amp; Multimodal Infra
                                        </a>
                                    </span>
                                    <p className="timeline-description">
                                        Production LLM serving across multiple inference stacks for large-scale multi-turn,
                                        long-context chat. APC-aware KV-cache lookup in LMCache (16–25% lower p50 TTFT),
                                        a sliding-window-aware hybrid KV manager (2× per-GPU SLO capacity),
                                        ROCm-profiler-driven attention and hand-scheduled assembly FP8 GEMM kernels on AMD GPUs
                                        (1.45× faster than AITER; 0.97→0.78 pJ/FLOP), and the end-to-end, closed-loop validation gate
                                        every serving optimization cleared before rollout: session-aware multi-turn replay at real arrival times
                                        (TTFT/TBT/E2E within 5% of production), quality parity against production on 2,000 served requests,
                                        and online A/B tests at equal load.
                                        Together the kernels and the KV manager raised per-GPU capacity 6×, cutting the fleet from 206 to 32 GPUs (~$4.6M/yr saved).
                                    </p>
                                    <div className="timeline-tags">
                                        <span className="timeline-tag">LLM Serving</span>
                                        <span className="timeline-tag">KV Cache</span>
                                        <span className="timeline-tag">Kernel Optimization</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jacobs Technion-Cornell Institute */}
                        <div className="timeline-item fade-in">
                            <div className="timeline-card">
                                <div className="timeline-logo">
                                    <img src={process.env.PUBLIC_URL + "/ct.png"} alt="Cornell Tech" />
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-top-row">
                                        <h3 className="timeline-role">Machine Learning System Researcher – S4AI Lab</h3>
                                        <span className="timeline-period">Sep 2025 – Present</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://tech.cornell.edu/" target="_blank" rel="noreferrer">
                                            Cornell Tech, Cornell University
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
                                        . Designed a measurement-driven placement planner for multi-stage speech serving that
                                        sets stage placement, memory split, replica count, and GPU-sharing mode from two short
                                        probes per candidate plan (+40% on Qwen3-Omni 30B, +60% on Qwen3-TTS 1.7B over shipped
                                        configurations). Designed a prediction-free, tail-aware scheduler (γ-Boost) with
                                        KV-cache-aware preemption that cut tail TTFT/TTLT by 37–60% on Azure production traces
                                        (ICML 2026). Developed PTA (Prefill → Think → Answer) disaggregated
                                        serving with per-stage DVFS, KV-cache, and GPU allocation under power caps, cutting
                                        P90 time-between-answer-tokens by 49–71% versus prefill–decode disaggregation, and a
                                        Flex service tier with a KKT-based online solver that turns bounded latency slack into
                                        per-stage settings within milliseconds (78.3% vs. 47.6% goodput at a 30% power cap).
                                    </p>
                                    <div className="timeline-tags">
                                        <span className="timeline-tag">LLM Serving</span>
                                        <span className="timeline-tag">Disaggregated Serving</span>
                                        <span className="timeline-tag">Energy-Aware Scheduling</span>
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
                                        <h3 className="timeline-role">Research Engineer</h3>
                                        <span className="timeline-period">May 2025 – Jul 2025</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://www.tencent.com/en-us/" target="_blank" rel="noreferrer">
                                            Tencent Hunyuan: Reinforcement Learning Infra
                                        </a>
                                    </span>
                                    <p className="timeline-description">
                                        Request-level admission control with stepwise latency profiling and SLA-aware
                                        priority scheduling, holding 100% goodput under 2–10× QPS bursts.
                                        CUDA attention-kernel optimization for GQA and DeepSeek FlashMLA, profiled with
                                        Nsight Compute, for about 20% and 15% throughput gains.
                                    </p>
                                    <div className="timeline-tags">
                                        <span className="timeline-tag">LLM Inference</span>
                                        <span className="timeline-tag">Admission Control</span>
                                        <span className="timeline-tag">Kernel Optimization</span>
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
                                        <h3 className="timeline-role">Undergraduate Student Researcher – Far Data Lab</h3>
                                        <span className="timeline-period">Jan 2024 – Feb 2025</span>
                                    </div>
                                    <span className="timeline-org">
                                        <a href="https://www.utoronto.ca/" target="_blank" rel="noreferrer">
                                            University of Toronto
                                        </a>
                                    </span>
                                    <p className="timeline-description">
                                        Supervised by{" "}
                                        <a href="https://qizhenzhang.me/" target="_blank" rel="noreferrer" className="highlight-link">
                                            Prof. Qizhen Zhang
                                        </a>
                                        {" "}at the{" "}
                                        <a href="https://fardatalab.org/" target="_blank" rel="noreferrer" className="highlight-link">
                                            Far Data Lab
                                        </a>
                                        . Co-designed{" "}
                                        <a href="https://arxiv.org/abs/2504.05536" target="_blank" rel="noreferrer" className="highlight-link">
                                            dpBento
                                        </a>
                                        {" "}to benchmark heterogeneous DPUs for data processing offload (SoCC 2026).
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
