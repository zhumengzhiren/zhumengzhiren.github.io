import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import Typewriter from "typewriter-effect";
import './About.css';
import homeLogo from "../../assets/star.gif";
import myImg from "../../assets/person.gif";

function About() {
    return (
        <section>
            <Container className="home-content">
                <Container fluid id="home">
                    <Row fluid id="home">
                        <Col xl={7}>
                            <h1 className="home-primary-header fade-in">
                                Nice to meet you!{""}
                                <span className="wave" role="img" aria-labelledby="wave"> 🧑‍💻 </span>
                            </h1>

                            <h1 className="heading-name fade-in">
                                I'm
                                <strong className="primary-color"> Yuanfan Chen(陈远梵)</strong>
                            </h1>

                            <div className="typewriter-wrapper-home fade-in">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "> Bachelor at University of Toronto",
                                            "> Master at Cornell University",
                                            "> AI Infra Researcher",
                                            "> Database Engineer",
                                        ],
                                        cursor: '|',
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 20,
                                    }}
                                />
                            </div>
                        </Col>

                        <Col xl={5}>
                            <Tilt>
                                <img src={homeLogo} className="img-fluid fade-in" style={{maxHeight: "700px"}}
                                     alt="avatar"/>
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
                <Container className={"section-divider"} fluid id="about">
                    <Row>
                        <Col xl={8}>
                            <h1 className="fade-in section-header">
                                LET ME <span className="primary-color"> INTRODUCE </span> MYSELF
                            </h1>
                            <p className="paragraph fade-in">
                                I completed my undergraduate and master's studies in Computer Science at
                                <b className="primary-color"> Cornell University </b> and the
                                <b className="primary-color"> University of Toronto</b>, respectively.
                            </p>
                            <p className="paragraph fade-in">
                                My research experience includes serving as a Research Assistant at the
                                <b className="primary-color"> Jacobs Technion-Cornell Institute </b> and the
                                <b className="primary-color"> Far Data Lab</b>. Professionally, I have worked as a
                                <b className="primary-color"> Database Kernel Engineer </b> at Tencent.
                            </p>
                            <p className="paragraph fade-in">
                                I have strong expertise in
                                <b className="primary-color"> databases </b> and
                                <b className="primary-color"> AI infrastructure</b>, with extensive experience in
                                distributed systems and large-scale model inference frameworks.
                                My primary interests lie in these areas, and I aim to pursue a career in databases and AI infrastructure.
                            </p>
                        </Col>
                        <Col xl={4} className="my-avtar">
                            <img src={myImg} className="fade-in img-fluid" style={{maxHeight: "400px"}}
                                 alt="avatar"/>
                        </Col>
                    </Row>
                </Container>
                <Container className={"section-divider"} fluid id="contact">
                    <h1 className="section-header fade-in">
                        <span className="primary-color"> CONTACT </span> {" "} ME AT
                    </h1>
                    {/*<p className="home-contact-info fade-in">*/}
                    {/*    <HiOutlineLocationMarker c style={{*/}
                    {/*        width: '40px',*/}
                    {/*        height: '40px',*/}
                    {/*        fill: "white !important"*/}
                    {/*    }}/> {"  "} 65 Saint Mary Street, Toronto ON, M5S 0A6, Canada*/}
                    {/*</p>*/}
                    <p className="home-contact-info fade-in">
                        <AiOutlineMail style={{width: '40px', height: '40px'}}/> {" "} yuanfan0504 AT
                        gmail.com
                    </p>
                    <p className="home-contact-info fade-in">
                        <AiOutlinePhone style={{width: '40px', height: '40px'}}/> {" "} +1 (646)-963-8426
                    </p>

                    <ul className="social_icon_list fade-in">
                        <div className="social-icons">
                            <a
                                href="https://github.com/zhumengzhiren"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillGithub/>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://linkedin.com/in/yuanfan-chen-97b1a8280"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com/zhumengzhiren/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillInstagram/>
                            </a>
                        </div>
                    </ul>
                </Container>
            </Container>

        </section>
    );
}

export default About;

