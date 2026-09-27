import React from "react";
import {Container} from "react-bootstrap";
import './Publications.css';
import Particle from "../../Particle";
import Seo from "../../Seo";

function Publications() {
    const publications = [
        {
            title: "Beyond Prediction: Tail-Aware Scheduling for LLM Inference",
            authors: [
                "Yueying Li",
                {name: "Yuanfan Chen", self: true},
                "Jiayang Chen", "Esha Choukse", "Haoran Qiu",
                "G. Edward Suh", "Rodrigo Fonseca", "Ziv Scully", "Udit Gupta"
            ],
            venue: "ICML",
            year: "2026",
            arxiv: "https://arxiv.org/abs/2606.18431",
            website: "https://yl3469.github.io/uniboost-icml26/",
            abstract: "LLM serving exhibits extreme length variability, making size-based scheduling difficult in practice. Recent LLM schedulers approximate SJF/SRPT using predicted decode lengths or rank and primarily report mean-centric metrics (e.g., TTFT/TBT). We show these prediction-driven policies can be fragile under distribution shifts, bursty arrivals, and GPU memory pressure, and still offer limited control over tail latency (P90–P99) that dominates user experience—even with perfect decode-length knowledge. We introduce a distribution-aware, prediction-free scheduling framework that replaces explicit length prediction with soft, γ-parameterized priority boosting driven by lightweight statistical signals. Our design co-optimizes scheduling with cache-aware preemption to account for memory-coupled decode dynamics that vary across workload mixes. Evaluated on Azure production traces, our method achieves a P99 TTLT up to 35–50% lower than SRPT with perfect length prediction and a TTFT 34–47% lower across various workloads, including reasoning-heavy and chat-heavy tasks, demonstrating a robust alternative for tail-latency optimization in online LLM serving."
        },
        {
            title: "Making Sense of DPU Performance for Cloud Data Processing",
            authors: [
                "Jiasheng Hu", "Chihan Cui",
                {name: "Yuanfan Chen", self: true},
                "Philip A. Bernstein", "Jialin Li", "Qizhen Zhang"
            ],
            venue: "SoCC (17th ACM Symposium on Cloud Computing)",
            year: "2026",
            arxiv: "https://arxiv.org/abs/2504.05536",
            abstract: "Data processing units (DPUs, SoC-based SmartNICs) are emerging data center hardware that provide opportunities to address cloud data processing challenges. We developed a DPU benchmarking framework that encompasses a suite of data processing tasks from primitive compute, memory, and I/O operations and hardware-accelerated tasks to macro-level cloud database modules and a full-fledged, lightweight DBMS."
        },
    ];

    const service = [
        {
            role: "Invited Reviewer",
            venue: "IEEE Journal on Selected Areas in Information Theory (JSAIT)",
            detail: "Special Issue on Energy and Data Efficiency in AI",
            year: "2026",
        },
    ];

    const contributions = [
        {
            repo: "vLLM",
            repoUrl: "https://github.com/vllm-project/vllm",
            items: [
                {text: "Root-caused and fixed a production bug where uninitialized padded fp8 MoE expert weights made some replicas silently emit corrupted tokens.", label: "PR #55251", url: "https://github.com/vllm-project/vllm/pull/55251"},
            ],
        },
        {
            repo: "LMCache",
            repoUrl: "https://github.com/LMCache/LMCache",
            items: [
                {text: "L1/L2 cache-hit attribution for the multi-process lookup path.", label: "PR #4734", url: "https://github.com/LMCache/LMCache/pull/4734"},
                {text: "Prometheus counters for L1/L2 hits and early exits.", label: "PR #4962", url: "https://github.com/LMCache/LMCache/pull/4962"},
            ],
        },
        {
            repo: "SGLang-Omni",
            repoUrl: "https://github.com/sgl-project/sglang-omni",
            items: [
                {text: "Same-GPU weight sharing across data-parallel replicas via CUDA IPC and MPS.", label: "PR #1124", url: "https://github.com/sgl-project/sglang-omni/pull/1124"},
                {text: "Co-developed Restage placement ranking for multi-stage pipelines.", label: "PR #2134", url: "https://github.com/sgl-project/sglang-omni/pull/2134"},
            ],
        },
    ];

    const renderAuthors = (authors) => {
        return authors.map((author, i) => {
            const isLast = i === authors.length - 1;
            const separator = isLast ? "" : ", ";
            if (typeof author === "object" && author.self) {
                return (
                    <span key={i}>
                        <span className="pub-author-self">{author.name}</span>
                        {separator}
                    </span>
                );
            }
            return <span key={i}>{author}{separator}</span>;
        });
    };

    return (
        <section>
            <Seo
                title="Publications | Yuanfan Chen"
                description="Publications by Yuanfan Chen on tail-aware LLM inference scheduling (ICML 2026) and DPU performance for cloud data processing (SoCC 2026), plus open-source contributions to vLLM, LMCache, and SGLang-Omni."
                path="/publications"
            />
            <Container fluid className="pub-page">
                <Particle />
                <Container>
                    <h1 className="pub-section-header fade-in">
                        <span>PUBLICATIONS</span>
                    </h1>

                    <ol className="pub-list">
                        {publications.map((pub, index) => (
                            <li key={index} className="pub-entry fade-in">
                                <div className="pub-title">{pub.title}</div>
                                <div className="pub-authors">
                                    {renderAuthors(pub.authors)}
                                </div>
                                <div className="pub-venue">
                                    <span className="pub-venue-name">{pub.venue}</span>, {pub.year}
                                </div>
                                <div className="pub-links">
                                    {pub.arxiv && (
                                        <a href={pub.arxiv} target="_blank" rel="noreferrer" className="pub-link-btn">
                                            arXiv
                                        </a>
                                    )}
                                    {pub.pdf && (
                                        <a href={pub.pdf} target="_blank" rel="noreferrer" className="pub-link-btn">
                                            PDF
                                        </a>
                                    )}
                                    {pub.code && (
                                        <a href={pub.code} target="_blank" rel="noreferrer" className="pub-link-btn">
                                            Code
                                        </a>
                                    )}
                                    {pub.openreview && (
                                        <a href={pub.openreview} target="_blank" rel="noreferrer" className="pub-link-btn">
                                            OpenReview
                                        </a>
                                    )}
                                    {pub.website && (
                                        <a href={pub.website} target="_blank" rel="noreferrer" className="pub-link-btn">
                                            Website
                                        </a>
                                    )}
                                </div>
                                {pub.abstract && (
                                    <details className="pub-abstract-toggle">
                                        <summary>Abstract</summary>
                                        <p className="pub-abstract">{pub.abstract}</p>
                                    </details>
                                )}
                            </li>
                        ))}
                    </ol>

                    <h1 className="pub-section-header fade-in" style={{marginTop: "60px"}}>
                        <span>OPEN SOURCE</span>
                    </h1>

                    <div className="oss-list">
                        {contributions.map((c, index) => (
                            <div key={index} className="oss-entry fade-in">
                                <div className="pub-title">
                                    <a href={c.repoUrl} target="_blank" rel="noreferrer">{c.repo}</a>
                                </div>
                                <ul className="oss-items">
                                    {c.items.map((item, j) => (
                                        <li key={j}>
                                            {item.text}{" "}
                                            <a href={item.url} target="_blank" rel="noreferrer" className="pub-link-btn oss-pr">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h1 className="pub-section-header fade-in" style={{marginTop: "60px"}}>
                        <span>ACADEMIC SERVICE</span>
                    </h1>

                    <div className="service-list">
                        {service.map((s, i) => (
                            <div key={i} className="service-entry fade-in">
                                <span className="service-role">{s.role}</span>
                                <span className="service-venue">{s.venue}</span>
                                <span className="service-detail">{s.detail}, {s.year}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Container>
        </section>
    );
}

export default Publications;
