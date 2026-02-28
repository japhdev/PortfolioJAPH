import React from "react";
import { ReactTyped } from "react-typed";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a
                                href="https://github.com/japhdev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="mailto:alan.hernandez.18400700@gmail.com">
                                <i className="fa fa-google"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/japhdev/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a
                                href="https://x.com/JAPH_dev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello, I'M <span className="highlighted-text">JAPH</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <div className="primary-text">
                            <h1>
                                <ReactTyped
                                    strings={[
                                        "Software Engineer",
                                        "Backend Developer",
                                        "Web Developer",
                                        "Mobile Developer",
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    backDelay={3000}
                                    startDelay={300}
                                    showCursor={true}
                                    cursorChar="|"
                                    loop
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Building the future, one idea at a time.
                            </span>
                        </div>
                    </div>
                    <div className="profile-options">
                        <button
                            className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            Contact Me
                        </button>
                        <a
                            href="curriculum_vitae.pdf"
                            download="Josue Alan Pablo Hernandez.pdf"
                        >
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
