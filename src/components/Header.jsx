import { Link, NavLink } from "react-router-dom";
import IconImg from "../assets/icon.png";
import { Phone, Mail, MapPin, Calendar, Shield, Users, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top Contact Bar - Professional & Friendly */}
      <div className="top-header d-none d-lg-block">
        <div className="container-fluid px-4 px-xl-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="contact-info d-flex flex-wrap gap-4">
                <a href="tel:+250785823388" className="contact-link">
                  <Phone size={14} />
                  <span>+250 785 823 388</span>
                </a>
                <a href="tel:+250792078594" className="contact-link">
                  <Phone size={14} />
                  <span>+250 792 078 594</span>
                </a>
                <a href="mailto:hevents639@gmail.com" className="contact-link">
                  <Mail size={14} />
                  <span>hevents639@gmail.com</span>
                </a>
                <span className="contact-location">
                  <MapPin size={14} />
                  <span>Rusizi - Kamembe, Western Province</span>
                </span>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="services-tagline">
                <span className="service-badge">
                  <Shield size={12} /> Protocol
                </span>
                <span className="service-badge">
                  <Shield size={12} /> Security
                </span>
                <span className="service-badge">
                  <Users size={12} /> Ushering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top px-4 py-2" style={{ 
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.05)',
        borderBottom: '1px solid rgba(220, 38, 38, 0.08)',
        top: '40px'
      }}>
        <div className="container-fluid px-0 px-lg-3">
          
          <Link 
            className="navbar-brand d-flex align-items-center fw-bold position-relative" 
            to="/"
            style={{ gap: "10px" }}
          >
            {/* LOGO IMAGE */}
            <div className="logo-wrapper">
              <img 
                src={IconImg} 
                alt="Hope Events Logo"
                className="logo-img"
              />
              <div className="logo-glow"></div>
            </div>

            {/* LOGO TEXT */}
            <div className="logo-text-wrapper">
              <span className="logo-text">
                HOPE <span className="logo-highlight">EVENTS</span>
              </span>
              <span className="logo-tagline">Excellence in Every Detail</span>
            </div>
          </Link>

          {/* TOGGLER (Mobile) */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ padding: '0.5rem', borderRadius: '12px' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/services"
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink 
                  className={({ isActive }) => 
                    `nav-link px-3 py-2 fw-semibold transition-all ${isActive ? 'active-nav' : ''}`
                  } 
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>

              {/* CTA BUTTON with shine effect */}
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <Link 
                  to="/booking" 
                  className="btn-cta"
                >
                  <Calendar size={18} />
                  <span>Book Now</span>
                  <Sparkles size={14} className="sparkle-icon" />
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Global styles */}
        <style>{`
          /* Top Header Styles */
          .top-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            padding: 8px 0;
            border-bottom: 1px solid rgba(220, 38, 38, 0.3);
            backdrop-filter: blur(5px);
          }

          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .contact-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 4px 0;
          }

          .contact-link:hover {
            color: #dc2626;
            transform: translateY(-1px);
          }

          .contact-location {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.8rem;
            font-weight: 500;
          }

          .services-tagline {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
          }

          .service-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(220, 38, 38, 0.15);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 600;
            color: #dc2626;
            letter-spacing: 0.3px;
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
          }

          .service-badge:hover {
            background: rgba(220, 38, 38, 0.25);
            transform: scale(1.05);
          }

          /* Logo Styles */
          .logo-wrapper {
            position: relative;
          }

          .logo-img {
            width: 45px;
            height: 45px;
            object-fit: cover;
            border-radius: 12px;
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
          }

          .logo-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 55px;
            height: 55px;
            background: radial-gradient(circle, rgba(220,38,38,0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
          }

          .navbar-brand:hover .logo-glow {
            opacity: 1;
          }

          .logo-text-wrapper {
            display: flex;
            flex-direction: column;
            line-height: 1.2;
          }

          .logo-text {
            font-size: 1.5rem;
            font-weight: 800;
            letter-spacing: -0.5px;
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 60%, #7f1d1d 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .logo-highlight {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .logo-tagline {
            font-size: 0.65rem;
            font-weight: 500;
            letter-spacing: 1px;
            color: #6b7280;
            text-transform: uppercase;
          }

          /* Navigation Links */
          .nav-link {
            position: relative;
            transition: all 0.2s ease;
            color: #4b5563 !important;
            font-size: 0.95rem;
            font-weight: 600;
            border-radius: 12px;
            padding: 0.5rem 1rem !important;
          }
          
          .nav-link:hover {
            color: #dc2626 !important;
            background-color: rgba(220, 38, 38, 0.06);
            transform: translateY(-1px);
          }
          
          .active-nav {
            color: #dc2626 !important;
            background: linear-gradient(135deg, rgba(220,38,38,0.08), rgba(185,28,28,0.04));
            position: relative;
          }
          
          .active-nav::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 3px;
            background: linear-gradient(90deg, #dc2626, #ef4444);
            border-radius: 3px;
          }

          /* CTA Button */
          .btn-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
            padding: 0.5rem 1.25rem;
            border-radius: 40px;
            color: white;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
            position: relative;
            overflow: hidden;
          }

          .btn-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
          }

          .btn-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
            color: white;
          }

          .btn-cta:hover::before {
            left: 100%;
          }

          .sparkle-icon {
            transition: all 0.3s ease;
          }

          .btn-cta:hover .sparkle-icon {
            transform: rotate(15deg) scale(1.1);
          }

          /* Mobile Responsive */
          @media (max-width: 992px) {
            .navbar {
              top: 0 !important;
            }
            
            .navbar-nav {
              padding: 1rem 0;
            }
            
            .nav-item {
              margin: 0.25rem 0;
            }
            
            .active-nav::after {
              display: none;
            }
            
            .logo-text {
              font-size: 1.2rem;
            }
            
            .logo-tagline {
              font-size: 0.55rem;
            }
            
            .logo-img {
              width: 38px;
              height: 38px;
            }
          }

          /* Animation for shine effect on logo */
          @keyframes shine {
            0% {
              left: -75%;
            }
            20%, 100% {
              left: 125%;
            }
          }

          /* Dropdown adjustments */
          .navbar-toggler:focus {
            box-shadow: none;
          }
        `}</style>
      </nav>
    </>
  );
}