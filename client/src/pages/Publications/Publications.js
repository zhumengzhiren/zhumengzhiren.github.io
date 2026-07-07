import React from "react";
import {Container} from "react-bootstrap";
import './Publications.css';
import Particle from "../../Particle";

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
            venue: "ICML 2026",
            year: "2026",
            arxiv: "https://arxiv.org/abs/2606.18431",
            website: "https://yl3469.github.io/uniboost-icml26/",
            abstract: "LLM serving exhibits extreme length variability, making size-based scheduling difficult in practice. Recent LLM schedulers approximate SJF/SRPT using predicted decode lengths or rank and primarily report mean-centric metrics (e.g., TTFT/TBT). We show these prediction-driven policies can be fragile under distribution shifts, bursty arrivals, and GPU memory pressure, and still offer limited control over tail latency (P90–P99) that dominates user experience—even with perfect decode-length knowledge. We introduce a distribution-aware, prediction-free scheduling framework that replaces explicit length prediction with soft, γ-parameterized priority boosting driven by lightweight statistical signals. Our design co-optimizes scheduling with cache-aware preemption to account for memory-coupled decode dynamics that vary across workload mixes. Evaluated on Azure production traces, our method achieves a P99 TTLT up to 35–50% lower than SRPT with perfect length prediction and a TTFT 34–47% lower across various workloads, including reasoning-heavy and chat-heavy tasks, demonstrating a robust alternative for tail-latency optimization in online LLM serving."
        },
        {
            title: "Making Sense of DPU Performance for Cloud Data Processing: [Experiment, Analysis & Benchmark]",
            authors: [
                "Jiasheng Hu", "Chihan Cui",
                {name: "Yuanfan Chen", self: true},
                "Philip A. Bernstein", "Jialin Li", "Qizhen Zhang"
            ],
            venue: "arXiv preprint",
            year: "2025",
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
                                            Project Page
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
