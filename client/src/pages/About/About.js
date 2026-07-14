import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {FaGoogleScholar} from "react-icons/fa6";
import './About.css';
import Seo from "../../Seo";

function About() {
    return (
        <section>
            <Seo
                title="About | Yuanfan Chen"
                description="About Yuanfan Chen, an ML systems researcher and Cornell University computer science graduate working on inference and distributed systems."
                path="/about"
            />
            <Container className="about-page">
                {/* Hero */}
                <div className="about-hero fade-in">
                    <h1 className="about-name">Yuanfan Chen</h1>
                    <p className="about-name-cn">陈远梵</p>
                    <p className="about-tagline">
                        M.Eng. Computer Science, Cornell University
                    </p>
                    <div className="about-links">
                        <a href="mailto:yuanfan0504@gmail.com" className="about-link-item">
                            <AiOutlineMail /> Email
                        </a>
                        <a href="https://github.com/zhumengzhiren" target="_blank" rel="noreferrer" className="about-link-item">
                            <AiFillGithub /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/yuanfan-chen-97b1a8280" target="_blank" rel="noreferrer" className="about-link-item">
                            <FaLinkedinIn /> LinkedIn
                        </a>
                        <a href="https://scholar.google.com/citations?user=YOUR_ID" target="_blank" rel="noreferrer" className="about-link-item">
                            <FaGoogleScholar /> Scholar
                        </a>
                    </div>
                </div>

                {/* Bio */}
                <div className="about-section fade-in">
                    <h2 className="about-section-title">ABOUT</h2>
                    <div className="about-bio">
                        <p>
                            He completed his undergraduate and master's studies in Computer Science at the{" "}
                            <a href="https://www.utoronto.ca/" target="_blank" rel="noreferrer" className="bio-link">
                                University of Toronto
                            </a>{" "}and{" "}
                            <a href="https://tech.cornell.edu/" target="_blank" rel="noreferrer" className="bio-link">
                                Cornell University
                            </a>, respectively.
                            With research experience at both institutions and professional experience
                            as an AI Infra Engineer at{" "}
                            <a href="https://www.tencent.com/en-us/" target="_blank" rel="noreferrer" className="bio-link">
                                Tencent
                            </a>, he has built strong expertise in Machine Learning Systems.
                        </p>
                        <p>
                            His research specifically targets system-level bottlenecks in large-scale
                            model inference, distributed scheduling, and hardware-aware kernel optimizations.
                        </p>
                    </div>
                </div>

                {/* Research Interests */}
                <div className="about-section fade-in">
                    <h2 className="about-section-title">RESEARCH INTERESTS</h2>
                    <div className="about-interests">
                        <Row>
                            <Col md={6}>
                                <ul className="interest-list">
                                    <li>Large-Scale Model Inference Systems</li>
                                    <li>Distributed Scheduling</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <ul className="interest-list">
                                    <li>Hardware-Aware Kernel Optimization</li>
                                    <li>ML Infrastructure & Database Systems</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Contact */}
                <div className="about-section fade-in">
                    <h2 className="about-section-title">CONTACT</h2>
                    <div className="about-contact">
                        <p>yuanfan0504 [at] gmail.com</p>
                        <p>+1 (646) 963-8426</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;
