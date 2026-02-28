import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-parents">
                <div className="footer-grid">
                    <div className="footer-details">
                        <div className="header-logo">
                            <span>JAPH Dev</span>
                        </div>
                        <p className="footer-description">
                            <strong>Software Development Engineer</strong>
                        </p>
                        <p className="footer-description">
                            Always learning and committed to continuous improvement.
                        </p>

                        <p className="footer-description">
                            <span>Portfolio v1.0 · 2025</span>
                        </p>
                    </div>

                    <div className="footer-tech">
                        <p>Tech Stack</p>

                        <p className="tech-title">Frontend</p>
                        <ul>
                            <li>
                                <a
                                    href="https://react.dev/"
                                    title="React"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    React
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                                    title="HTML"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    HTML
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                                    title="CSS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    CSS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.embla-carousel.com/"
                                    title="Embla"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Embla
                                </a>
                            </li>
                        </ul>

                        <p className="tech-title">Backend</p>
                        <ul>
                            <li>
                                <a
                                    href="https://nodejs.org/es"
                                    title="Node.js"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Node.js
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://expressjs.com/"
                                    title="Express"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Express
                                </a>
                            </li>
                        </ul>

                        <p className="tech-title">APIs & Services</p>
                        <ul>
                            <li>
                                <a
                                    href="https://resend.com/"
                                    title="Resend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resend
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-projects">
                        <p>Selected Projects</p>

                        <div>
                            <div>
                                <p>
                                    <a
                                        href="https://github.com/japhdev/PortfolioJAPH.git"
                                        title="GitHub Repository"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Personal Portfolio Web – React.js
                                    </a>
                                </p>
                                <p>In Progress</p>
                            </div>

                            <div>
                                <p>
                                    <a
                                        href="https://github.com/japhdev/App-Gestor-de-horarios.git"
                                        title="GitHub Repository"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Employee Schedule Manager (iOS)
                                    </a>
                                </p>
                                <p>April, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <p className="footer-copyright">
                        © Copyright 2026, All Rights Reserved by JAPH
                    </p>
                </div>
            </div>
        </footer>
    );
}
