import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import Particle from "../../Particle";
import Seo from "../../Seo";
import "./Home.css";

const description = "Yuanfan Chen is an ML systems researcher working on large-scale model inference, distributed scheduling, and hardware-aware optimization.";

function Home() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Yuanfan Chen",
        url: "https://zhumengzhiren.github.io/",
        jobTitle: "ML Systems Researcher",
        alumniOf: [
            { "@type": "CollegeOrUniversity", name: "Cornell University" },
            { "@type": "CollegeOrUniversity", name: "University of Toronto" }
        ],
        sameAs: [
            "https://github.com/zhumengzhiren",
            "https://linkedin.com/in/yuanfan-chen-97b1a8280"
        ]
    };

    return (
        <main className="home-page">
            <Seo title="Yuanfan Chen | ML Systems Researcher" description={description}>
                <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
            </Seo>
            <Particle />
            <section className="home-hero">
                <p className="home-eyebrow">ML SYSTEMS · DISTRIBUTED SYSTEMS</p>
                <h1>Yuanfan Chen</h1>
                <p className="home-role">ML Systems Researcher</p>
                <p className="home-intro">
                    I build efficient systems for large-scale machine learning, with a focus on
                    model inference, distributed scheduling, and hardware-aware optimization.
                    I received my M.Eng. in Computer Science from Cornell University and my B.Sc.
                    in Computer Science from the University of Toronto.
                </p>

                <div className="home-actions">
                    <Link className="home-primary-link" to="/publications">
                        <IoBookOutline /> View Publications
                    </Link>
                    <Link className="home-secondary-link" to="/about">About Me</Link>
                    <Link className="home-secondary-link" to="/resume">Resume</Link>
                </div>

                <div className="home-contact-links" aria-label="Contact and profiles">
                    <a href="mailto:yuanfan0504@gmail.com"><AiOutlineMail /> Email</a>
                    <a href="https://github.com/zhumengzhiren" target="_blank" rel="noreferrer"><AiFillGithub /> GitHub</a>
                    <a href="https://linkedin.com/in/yuanfan-chen-97b1a8280" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
                </div>

                <div className="home-research">
                    <h2>Research Interests</h2>
                    <ul>
                        <li>Large-Scale Model Inference Systems</li>
                        <li>Distributed Scheduling</li>
                        <li>Hardware-Aware Kernel Optimization</li>
                        <li>ML Infrastructure &amp; Database Systems</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Home;
