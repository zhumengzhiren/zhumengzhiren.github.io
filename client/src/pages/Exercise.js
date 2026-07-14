// client/src/pages/Exercise.js
import React from 'react';
import { Container } from "react-bootstrap";
import Seo from "../Seo";
// import "../style.css";

const Exercise = () => {
    return <div>
        <Seo
            title="Exercise | Yuanfan Chen"
            description="Exercise notes by Yuanfan Chen."
            path="/exercise"
        />
        <Container fluid className="about-section">运动页面</Container>
    </div>;
};

export default Exercise;
