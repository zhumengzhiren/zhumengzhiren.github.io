import React from "react";
import {Container} from "react-bootstrap";
import './Publications.css';
import Particle from "../../Particle";
import {AiOutlineLink} from "react-icons/ai";

function Publications() {
    const publications = [
        {
            title: "dpBento: Benchmarking DPUs for Data Processing",
            authors: "Jiasheng Hu, Chihan Cui, Anna Li, Raahil Vora, Yuanfan Chen, Philip A. Bernstein, Jialin Li, Qizhen Zhang",
            venue: "arXiv:2504.05536, April 2025",
            link: "https://arxiv.org/abs/2504.05536",
            abstract: "Data processing units (DPUs, SoC-based SmartNICs) are emerging data center hardware that provide opportunities to address cloud data processing challenges. We present dpBento, a benchmark suite that aims to uncover the performance characteristics of different DPU resources and the performance implications of offloading a wide range of data processing operations and systems to DPUs."
        },
        // Add more publications here
    ];

    return (
        <section>
            <Container fluid className="publications-section">
                <Particle />
                <Container>
                    <h1 className="section-header fade-in">
                        <span className="highlight-color">PUBLICATIONS</span>
                    </h1>

                    <p className="section-subtitle fade-in">
                        Research papers and academic contributions
                    </p>

                    <div className="publications-list">
                        {publications.map((pub, index) => (
                            <div key={index} className="publication-card fade-in">
                                <h3 className="publication-title">
                                    {pub.link !== "#" ? (
                                        <a href={pub.link} target="_blank" rel="noreferrer">
                                            {pub.title} <AiOutlineLink className="link-icon"/>
                                        </a>
                                    ) : (
                                        pub.title
                                    )}
                                </h3>
                                <p className="publication-authors">{pub.authors}</p>
                                <p className="publication-venue">{pub.venue}</p>
                                <p className="publication-abstract">{pub.abstract}</p>
                            </div>
                        ))}

                        <div className="coming-soon fade-in">
                            <p>More publications coming soon...</p>
                        </div>
                    </div>
                </Container>
            </Container>
        </section>
    );
}

export default Publications;

