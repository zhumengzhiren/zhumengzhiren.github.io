'use client';
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";
// Load worker from an external CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const resumeFile = "/resume_en.pdf";

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
                    <Button
                        variant="primary"
                        href={process.env.PUBLIC_URL + resumeFile}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>

                <Row className="resume">
                    <Document
                        file={process.env.PUBLIC_URL + resumeFile}
                        className="d-flex justify-content-center"
                        onLoadError={(error) => console.error('Error while loading the document!', error)}
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;
