import React from "react";
import './Pre.css';

function Preloader(props) {
    return (
        props.load &&
        (<div id={props.load ? "preloader" : "preloader-none"}>
        <div className="pre preloader-1" >
            <div className="pre" >Loading</div>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
            <span className="line line-4"></span>
            <span className="line line-5"></span>
            <span className="line line-6"></span>
            <span className="line line-7"></span>
            <span className="line line-8"></span>
            <span className="line line-9"></span>
        </div>
        <div className="pre preloader-2" >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
            <span className="line line-4"></span>
            <span className="line line-5"></span>
            <span className="line line-6"></span>
            <span className="line line-7"></span>
            <span className="line line-8"></span>
            <span className="line line-9"></span>
            <div className="pre">Loading</div>
        </div>
    </div>
        )
);
}

export default Preloader;