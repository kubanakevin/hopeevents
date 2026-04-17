import { Link } from "react-router-dom";
import IconImg from "../assets/icon.png";
import { useState, useEffect } from "react";

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-dark text-white pt-5 pb-3" style={{ 
            background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.05,
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                pointerEvents: 'none'
            }}></div>

            <div className="container position-relative">
                {/* Newsletter Section */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-8">
                        <div className="bg-gradient p-4 p-lg-5 rounded-4 shadow-lg" style={{
                            background: 'linear-gradient(135deg, rgba(220,38,38,0.1) 0%, rgba(185,28,28,0.05) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(220,38,38,0.2)'
                        }}>
                            <div className="text-center">
                                <h4 className="fw-bold mb-3" style={{ color: '#dc2626' }}>
                                    Subscribe to Our Newsletter
                                </h4>
                                <p className="text-white-50 mb-4">
                                    Get the latest updates on our services and special offers
                                </p>
                                <div className="row g-2 justify-content-center">
                                    <div className="col-md-8">
                                        <input 
                                            type="email" 
                                            className="form-control form-control-lg" 
                                            placeholder="Enter your email address"
                                            style={{ 
                                                borderRadius: '50px',
                                                background: 'rgba(255,255,255,0.1)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                color: 'white'
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-auto">
                                        <button className="btn btn-danger btn-lg px-4" style={{ borderRadius: '50px' }}>
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row gy-5">
                    {/* BRAND SECTION */}
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center mb-4">
                            <div style={{
                                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
                                borderRadius: '15px',
                                padding: '8px',
                                boxShadow: '0 5px 15px rgba(220,38,38,0.3)'
                            }}>
                                <img
                                    src={IconImg}
                                    alt="Hope Events Logo"
                                    style={{
                                        width: "55px",
                                        height: "55px",
                                        borderRadius: "10px",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                            <h3 className="fw-bold ms-3 mb-0" style={{ 
                                background: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: "1px"
                            }}>
                                HOPE EVENTS
                            </h3>
                        </div>

                        <p className="text-white-50 mb-4" style={{ lineHeight: "1.8", fontSize: '0.95rem' }}>
                            Professional protocol, ushering, and security services for events of all sizes
                            in Rusizi and beyond. We ensure safety, organization, and unforgettable experiences.
                        </p>

                        {/* SOCIAL LINKS */}
                        <div className="d-flex gap-3 mt-3">
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-instagram fs-5 text-white"></i>
                            </a>
                            <a 
                                href="https://tiktok.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-tiktok fs-5 text-white"></i>
                            </a>
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-facebook fs-5 text-white"></i>
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-linkedin fs-5 text-white"></i>
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="social-icon"
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className="bi bi-twitter-x fs-5 text-white"></i>
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="col-lg-2">
                        <h5 className="fw-bold mb-4 text-white position-relative" style={{
                            display: 'inline-block',
                            paddingBottom: '10px'
                        }}>
                            Quick Links
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '40px',
                                height: '3px',
                                background: '#dc2626',
                                borderRadius: '2px'
                            }}></span>
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link to="/" className="footer-link text-white-50 text-decoration-none d-inline-block">
                                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i>
                                    Home
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/about" className="footer-link text-white-50 text-decoration-none d-inline-block">
                                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i>
                                    About Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/services" className="footer-link text-white-50 text-decoration-none d-inline-block">
                                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i>
                                    Our Services
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/booking" className="footer-link text-white-50 text-decoration-none d-inline-block">
                                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i>
                                    Book Us
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link to="/contact" className="footer-link text-white-50 text-decoration-none d-inline-block">
                                    <i className="bi bi-chevron-right me-2" style={{ fontSize: '12px' }}></i>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-4 text-white position-relative" style={{
                            display: 'inline-block',
                            paddingBottom: '10px'
                        }}>
                            Our Services
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '40px',
                                height: '3px',
                                background: '#dc2626',
                                borderRadius: '2px'
                            }}></span>
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <span className="text-white-50">
                                    <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '12px', color: '#dc2626' }}></i>
                                    Protocol Service
                                </span>
                            </li>
                            <li className="mb-3">
                                <span className="text-white-50">
                                    <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '12px', color: '#dc2626' }}></i>
                                    Ushering Service
                                </span>
                            </li>
                            <li className="mb-3">
                                <span className="text-white-50">
                                    <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '12px', color: '#dc2626' }}></i>
                                    Security Service
                                </span>
                            </li>
                            <li className="mb-3">
                                <span className="text-white-50">
                                    <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '12px', color: '#dc2626' }}></i>
                                    Event Planning
                                </span>
                            </li>
                            <li className="mb-3">
                                <span className="text-white-50">
                                    <i className="bi bi-check-circle-fill me-2" style={{ fontSize: '12px', color: '#dc2626' }}></i>
                                    VIP Management
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="col-lg-3">
                        <h5 className="fw-bold mb-4 text-white position-relative" style={{
                            display: 'inline-block',
                            paddingBottom: '10px'
                        }}>
                            Contact Info
                            <span style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '40px',
                                height: '3px',
                                background: '#dc2626',
                                borderRadius: '2px'
                            }}></span>
                        </h5>

                        <ul className="list-unstyled text-white-50">
                            <li className="mb-3 d-flex align-items-start gap-3">
                                <i className="bi bi-telephone-fill text-danger mt-1"></i>
                                <div>
                                    <div className="fw-semibold text-white mb-1">Phone / WhatsApp</div>
                                    <span>+250 785 823 388</span><br />
                                    <span>+250 792 078 594</span>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start gap-3">
                                <i className="bi bi-envelope-fill text-danger mt-1"></i>
                                <div>
                                    <div className="fw-semibold text-white mb-1">Email Address</div>
                                    <span>hevents639@gmail.com</span>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start gap-3">
                                <i className="bi bi-geo-alt-fill text-danger mt-1"></i>
                                <div>
                                    <div className="fw-semibold text-white mb-1">Our Location</div>
                                    <span>Rusizi - Kamembe, Western Province, Rwanda</span>
                                </div>
                            </li>

                            <li className="mb-3 d-flex align-items-start gap-3">
                                <i className="bi bi-clock-fill text-danger mt-1"></i>
                                <div>
                                    <div className="fw-semibold text-white mb-1">Business Hours</div>
                                    <span>Mon-Fri: 8:00 AM - 6:00 PM</span><br />
                                    <span>Sat: 9:00 AM - 4:00 PM</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                {/* BOTTOM SECTION */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="text-center text-md-start small text-white-50">
                            <p className="mb-0">
                                &copy; {currentYear} Hope Events Ltd. All rights reserved. | 
                                <Link to="/" className="text-white-50 text-decoration-none ms-1 hover-link">Privacy Policy</Link> | 
                                <Link to="/" className="text-white-50 text-decoration-none ms-1 hover-link">Terms of Service</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center text-md-end">
                            <p className="mb-0 small text-white-50">
                                Developed with <i className="bi bi-heart-fill text-danger"></i> by 
                                <span className="text-danger fw-semibold ms-1">Kevin Kubana</span>
                                <span className="d-block d-sm-inline-block ms-sm-2">(+250 788 804 113)</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="btn btn-danger rounded-circle position-fixed"
                    style={{
                        bottom: '30px',
                        right: '30px',
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 5px 15px rgba(220,38,38,0.4)',
                        zIndex: 1000,
                        opacity: 0.9,
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
                >
                    <i className="bi bi-arrow-up fs-5"></i>
                </button>
            </div>

            {/* CUSTOM STYLES */}
            <style>
                {`
                    .footer-link {
                        transition: all 0.3s ease;
                        position: relative;
                    }
                    
                    .footer-link:hover {
                        color: #dc2626 !important;
                        transform: translateX(5px);
                    }
                    
                    .social-icon {
                        transition: all 0.3s ease;
                    }
                    
                    .social-icon:hover {
                        background: #dc2626 !important;
                        transform: translateY(-5px);
                        box-shadow: 0 5px 15px rgba(220,38,38,0.4);
                    }
                    
                    .social-icon:hover i {
                        color: white !important;
                    }
                    
                    .hover-link {
                        transition: color 0.3s ease;
                    }
                    
                    .hover-link:hover {
                        color: #dc2626 !important;
                    }
                    
                    .bg-gradient {
                        background: linear-gradient(135deg, rgba(220,38,38,0.1) 0%, rgba(185,28,28,0.05) 100%);
                    }
                    
                    .form-control:focus {
                        background: rgba(255,255,255,0.15);
                        border-color: #dc2626;
                        box-shadow: 0 0 0 0.2rem rgba(220,38,38,0.25);
                        color: white;
                    }
                    
                    .form-control::placeholder {
                        color: rgba(255,255,255,0.5);
                    }
                    
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .footer-content {
                        animation: fadeInUp 0.6s ease;
                    }
                `}
            </style>
        </footer>
    );
}

export default Footer;