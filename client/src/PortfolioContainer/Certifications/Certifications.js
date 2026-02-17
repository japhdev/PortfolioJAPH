import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Certifications.css";

const certificates = [
    {
        id: 1,
        title: "Python Programming Fundamentals – Microsoft",
        subtitle: "Course focused on Python fundamentals, problem-solving, and programming logic.",
        image: "img/certificate/Certificate-Microsoft-Python-Programming-Fundamentals.jpg",
        pdfUrl: ""
    },
    {
        id: 2,
        title: "Python Santander Open Academy",
        subtitle: "Santander Open Academy",
        image: "img/certificate/Certificate-Python-Santander.jpg",
        pdfUrl: ""
    },
    {
        id: 3,
        title: "First Experience as Data Analyst – Python & Power BI",
        subtitle: "Developed a data analysis project using Python (Pandas).",
        image: "img/certificate/Certificate-Data-Analysis.jpg",
        pdfUrl: ""
    },
    {
        id: 4,
        title: "Certificate of Completion of Studies",
        subtitle: "Successfully completed all academic requirements of the Software Development Engineering.",
        image: "img/certificate/UIM-Certificate-of-Completion.jpg",
        pdfUrl: ""
    },
    {
        id: 5,
        title: "Introduction to Business I",
        subtitle: "Studied fundamental business.",
        image: "img/certificate/UIM-Introduction-to-Business-1.jpg",
        pdfUrl: ""
    },
    {
        id: 6,
        title: "Junior Tutor – Interface Design I",
        subtitle: "Supporting students in user interface principles, usability concepts, and practical UI.",
        image: "img/certificate/UIM-Interface-Design-1.jpg",
        pdfUrl: ""
    },
    {
        id: 7,
        title: "Operating Systems I – Certificate",
        subtitle: "Supporting students in operating system fundamentals.",
        image: "img/certificate/UIM-Operating-Systems-1.jpg",
        pdfUrl: ""
    }
];

const PrevButton = ({ enabled, onClick }) => (
    <button
        className="embla_button embla_button--prev"
        onClick={onClick}
        disabled={!enabled}
        type="button"
    >
        <svg className="embla_button_svg" viewBox="0 0 532 532">
            <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            ></path>
        </svg>
    </button>
);

const NextButton = ({ enabled, onClick }) => (
    <button
        className="embla_button embla_button--next"
        onClick={onClick}
        disabled={!enabled}
        type="button"
    >
        <svg className="embla_button_svg" viewBox="0 0 532 532">
            <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            ></path>
        </svg>
    </button>
);

const setupProgressBar = (emblaApi, progressNode) => {
    const applyProgress = () => {
        if (!emblaApi || !progressNode) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        progressNode.style.transform = `translate3d(${progress * 100}%,0px,0px)`;
    };

    const removeProgress = () => {
        if (progressNode) {
            progressNode.removeAttribute('style');
        }
    };

    return { applyProgress, removeProgress };
};

const PdfCertificatesCarousel = () => {
    const [pdfEmblaRef] = useEmblaCarousel(
        { 
            loop: true,
            align: "center",
            dragFree: false,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 2 },
                "(min-width: 1024px)": { slidesToScroll: 3 }
            }
        },
        [Autoplay({ delay: 11000, stopOnInteraction: true })]
    );

    const createErrorSVG = (title) => {
        const encodedTitle = encodeURIComponent(title);
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231e293b'/%3E%3Ctext x='200' y='120' text-anchor='middle' dy='.3em' fill='white' font-size='16' font-family='Inter, sans-serif'%3ESin conexión a internet%3C/text%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%2394a3b8' font-size='14' font-family='Inter, sans-serif'%3E${encodedTitle}%3C/text%3E%3C/svg%3E`;
    };

    return (
        <div className="pdf-certificates-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pdf-embla">
                            <div className="pdf-embla_viewport" ref={pdfEmblaRef}>
                                <div className="pdf-embla_container">
                                    {certificates.map((cert) => (
                                        <div className="pdf-embla_slide" key={cert.id}>
                                            <div 
                                                className="pdf-certificate-card"
                                                onClick={() => window.open(cert.pdfUrl, '_blank')}
                                                role="button"
                                                tabIndex={0}
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        window.open(cert.pdfUrl, '_blank');
                                                    }
                                                }}
                                            >
                                                <div className="pdf-card-image-container">
                                                    <img 
                                                        src={cert.image} 
                                                        alt={cert.title}
                                                        className="pdf-card-image"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = createErrorSVG(cert.title);
                                                        }}
                                                    />
                                                    <div className="pdf-hover-overlay">
                                                        <span className="pdf-hover-text">View PDF</span>
                                                    </div>
                                                </div>
                                                
                                                <div className="pdf-card-content">
                                                    <h3 className="pdf-card-title">{cert.title}</h3>
                                                    <p className="pdf-card-subtitle">{cert.subtitle}</p>
                                                </div>
                                                

                                            </div>
                                            
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="note-certificate">
                                                <strong>Note:</strong> Certificates are not publicly displayed for confidentiality purposes; however, they are available upon request.
                                                </p>
            </div>
        </div>
    );
};

export default function Certifications(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

        useEffect(() => {
                
                const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
                
                
                return () => {
                    if (fadeInSubscription) {
                        fadeInSubscription.unsubscribe();
                    }
                };
            }, [props.id]); 

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { 
            loop: false, 
            align: "start",
            dragFree: false,
            slidesToScroll: 1,
            breakpoints: {
                "(min-width: 768px)": { slidesToScroll: 1 },
                "(min-width: 1024px)": { slidesToScroll: 1 }
            }
        }, 
        [Autoplay({ delay: 9000, stopOnInteraction: false })]
    );

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const progressBarRef = useRef(null);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    const onScroll = useCallback(() => {
        if (!emblaApi || !progressBarRef.current) return;
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        progressBarRef.current.style.transform = `translate3d(${progress * 100}%,0px,0px)`;
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        
        const { applyProgress } = setupProgressBar(emblaApi, progressBarRef.current);
        
        onSelect();
        applyProgress();
        
        emblaApi.on("select", onSelect);
        emblaApi.on("scroll", onScroll);
        emblaApi.on("init", applyProgress);
        emblaApi.on("reInit", applyProgress);
        emblaApi.on("slideFocus", applyProgress);
        
        return () => {
            
            emblaApi.off("select", onSelect);
            emblaApi.off("scroll", onScroll);
            emblaApi.off("init", applyProgress);
            emblaApi.off("reInit", applyProgress);
            emblaApi.off("slideFocus", applyProgress);
        };
    }, [emblaApi, onSelect, onScroll]);

    const courses = [
        {
            id: 1,
            title: "iOS Schedule Manager",
            institution: "Academic Project",
            date: "2024",
            description: "Company Schedule Management App with Login & Registration",
            image: "img/projects/mobile_application_ios.jpg",
            certificateUrl: "https://github.com/japhdev/App-Gestor-de-horarios.git",
            skills: ["Swift", "Data base", "UI UX", "FireBase"]
        },
        {
            id: 2,
            title: "Portfolio Web JAPH",
            institution: "Personal Project",
            date: "2025",
            description: "React-based web portfolio implementing basic React Hooks, RxJS, and reusable components. Features responsive UI with Bootstrap, mobile-friendly layout, smooth scrolling, fade-in animations, Embla Carousel integration, React Typical type effect, and downloadable PDF assets. Includes Resend email service integration and full deployment workflow with GitHub version control..",
            image: "img/projects/portfolio-web_JAPHdev.jpg",
            certificateUrl: "https://github.com/japhdev/PorfolioRender.git",
            skills: ["React.js", "Bootstrap", "Hooks", "Node.js"]
        },
        {
            id: 3,
            title: "Portfolio Demo",
            institution: "Personal Project",
            date: "2025",
            description: "Personal portfolio web application built with Python and Flask, using HTML, CSS, and JavaScript for the frontend. The project showcases backend logic, routing, templates, and responsive design, integrating dynamic content and clean UI practices.",
            image: "img/projects/portfolio_beta.jpg",
            certificateUrl: "https://github.com/japhdev/portfolio-website.git",
            skills: ["Python", "HTML", "CSS", "Flask", "Flask-Mail"]
        },
        {
            id: 4,
            title: "First Experience in Data Analysis",
            institution: "DS4B",
            date: "2025",
            description: "In this project, I worked with a dataset of more than 5 million transaction records stored in SQLite. Using Python and Pandas, I performed data extraction, transformation, and analysis to generate meaningful business insights that were later visualized in a Power BI dashboard.",
            image: "img/projects/data_analysis.jpg",
            certificateUrl: "https://github.com/japhdev/MarketBasketAnalusis.git",
            skills: ["Python", "Pandas", "Power BI", "Market Basket Analysis"]
        }
    ];

    return (
        <div>
            <ScreenHeading
                title={"Courses & Certifications"}
                subHeading={"My Professional Development Journey"}
            />
            <section className="courses-section fade-in" id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-intro">
                                <p className="intro-text">
                                    Continuous learning is key in technology. Here are some of the courses 
                                    and certifications I've completed to enhance my skills.
                                </p>
                            </div>
                            
                            <div className="embla">
                                <div className="embla_viewport" ref={emblaRef}>
                                    <div className="embla_container">
                                        {courses.map((item) => (
                                            <div className="embla_slide" key={item.id}>
                                                <div className="course-card">
                                                    <div className="card-image">
                                                        <img 
                                                            src={item.image} 
                                                            alt={item.title}
                                                            onError={(e) => {
                                                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%232f70c1'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='white' font-size='20' font-family='Inter'%3E" + 
                                                                    encodeURIComponent(item.title) + "%3C/text%3E%3C/svg%3E";
                                                            }}
                                                        />
                                                        <div className="card-badge">{item.date}</div>
                                                    </div>
                                                    
                                                    <div className="card-content">
                                                        <h3 className="course-title">{item.title}</h3>
                                                        <p className="institution">
                                                            <i className="fa fa-university"></i> {item.institution}
                                                        </p>
                                                        <p className="course-description">{item.description}</p>
                                                        
                                                        <div className="skills-tags">
                                                            {item.skills.map((skill, index) => (
                                                                <span key={index} className="skill-tag">{skill}</span>
                                                            ))}
                                                        </div>
                                                        
                                                        <div className="card-actions">
                                                            <a 
                                                                href={item.certificateUrl} 
                                                                className="view-cert-btn"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <i className="fa fa-external-link"></i> View on GitHub
                                                            </a>
                                                            <button className="save-btn">
                                                                <i className="fa fa-bookmark"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="embla_controls">
                                    <div className="embla_buttons">
                                        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                                        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                                    </div>
                                    <div className="embla_progress">
                                        <div 
                                            className="embla_progress_bar" 
                                            ref={progressBarRef}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="stats-container">
                                <div className="stat-item">
                                    <h3>{courses.length}+</h3>
                                    <p>Courses Completed</p>
                                </div>
                                <div className="stat-item">
                                    <h3>300+</h3>
                                    <p>Learning Hours</p>
                                </div>
                                <div className="stat-item">
                                    <h3>{certificates.length}+</h3>
                                    <p>PDF Certificates</p>
                                </div>
                                <div className="stat-item">
                                    <h3>15+</h3>
                                    <p>Skills Acquired</p>
                                </div>
                            </div>

                            <PdfCertificatesCarousel />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}