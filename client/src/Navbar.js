import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
    AiOutlineHome,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GiStarCycle, GiDeerHead } from "react-icons/gi";
import { IoBookOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20 || window.innerWidth <= 992) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);
    window.addEventListener('resize', scrollHandler);

    return (
        <Navbar
            collapseOnSelect
            expanded={expand}
            fixed="top"
            expand="lg"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    {/*<GiStarCycle style={{ marginTop: "5px", marginRight:"5px" }}/>  York's Zen Garden*/}
                    <GiStarCycle/>
                </Navbar.Brand>


                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="ms-auto" defaultActiveKey="#home"
                    >

                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}}/> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <GiDeerHead style={{marginBottom: "2px"}}/> About
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/experience"
                                onClick={() => updateExpanded(false)}
                            >
                                <MdWorkOutline style={{marginBottom: "2px"}}/>{" "}
                                Experience
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/publications"
                                onClick={() => updateExpanded(false)}
                            >
                                <IoBookOutline style={{marginBottom: "2px"}}/>{" "}
                                Publications
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{marginBottom: "2px"}}/> Resume
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
