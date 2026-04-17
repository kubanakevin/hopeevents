import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import all images from assets
import aboutImg from "../assets/about.jpeg";
import about2Img from "../assets/about2.jpeg";
import hero1Img from "../assets/hero1.jpeg";
import hero2Img from "../assets/hero2.jpeg";
import service1Img from "../assets/service1.jpeg";
import service2Img from "../assets/service2.jpeg";
import securityImg from "../assets/security.jpeg";
import presidentImg from "../assets/presidente.jpg";


function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section position-relative" style={{ 
          minHeight: '90vh',
          background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%)',
          marginTop: '0',
          overflow: 'hidden'
        }}>
          {/* Background image overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${hero1Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            zIndex: 0
          }} />
          
          <div className="container position-relative" style={{ zIndex: 2, paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-4 rounded-pill" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                  EXCELLENCE IN PROTOCOL & EVENT SERVICES
                </span>
                <h1 className="display-3 fw-bold mb-4" style={{ color: '#fff', lineHeight: '1.2' }}>
                  Professional Protocol,{' '}
                  <span style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                    Ushering & Security
                  </span>{' '}
                  Services
                </h1>
                <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem' }}>
                  Hope Events Ltd delivers reliable and well-trained event staff to ensure smooth, 
                  organized, and secure events across Rusizi and beyond.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/booking" className="btn btn-danger px-4 py-3 fw-semibold" style={{ 
                    borderRadius: '50px',
                    fontSize: '1rem',
                    boxShadow: '0 10px 25px rgba(220,38,38,0.3)',
                    transition: 'all 0.3s ease'
                  }}>
                    Book Now →
                  </Link>
                  <Link to="/services" className="btn btn-outline-light px-4 py-3 fw-semibold" style={{ 
                    borderRadius: '50px',
                    fontSize: '1rem'
                  }}>
                    Our Services
                  </Link>
                </div>
              </div>
              <div className="col-lg-5">
                <img 
                  src={hero2Img} 
                  alt="Hope Events Team" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ 
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={aboutImg} 
                  alt="About Hope Events" 
                  className="img-fluid rounded-4 shadow"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="col-lg-6">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                  ABOUT US
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1a1a2e' }}>
                  Excellence in Every Event
                </h2>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  Hope Events Ltd is a dedicated event support and management company providing highly trained 
                  personnel for protocol, ushering, and security services.
                </p>
                <p style={{ color: '#6c757d' }}>
                  Based in Rusizi-Kamembe, Western Province, the company is committed to delivering 
                  professionalism, discipline, and excellence at every event. With a well-organized and 
                  presentable team, Hope Events ensures that every occasion—whether corporate, social, or 
                  private—is handled with precision and care.
                </p>
                <div className="row mt-4">
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-danger"></i>
                      <span>Professional Etiquette</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-danger"></i>
                      <span>Reliable Service</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-danger"></i>
                      <span>Strong Coordination</span>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-check-circle-fill text-danger"></i>
                      <span>Attention to Detail</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                OUR SERVICES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                What We Offer
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive event support services tailored to your needs
              </p>
            </div>

            <div className="row g-4">
              {/* Service 1 - Protocol */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={service1Img} className="card-img-top" alt="Protocol Service" style={{ height: '240px', objectFit: 'cover' }} />
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className="bi bi-megaphone-fill fs-1 text-danger"></i>
                    </div>
                    <h4 className="fw-bold mb-3">Protocol Service</h4>
                    <p className="card-text" style={{ color: '#6c757d' }}>
                      Professional protocol management ensuring VIP guests and dignitaries receive proper 
                      reception, seating, and coordination throughout your event.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 - Ushering */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={service2Img} className="card-img-top" alt="Ushering Service" style={{ height: '240px', objectFit: 'cover' }} />
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className="bi bi-people-fill fs-1 text-danger"></i>
                    </div>
                    <h4 className="fw-bold mb-3">Ushering Service</h4>
                    <p className="card-text" style={{ color: '#6c757d' }}>
                      Well-trained ushers to guide attendees, manage seating arrangements, and provide 
                      exceptional guest reception and assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 - Security */}
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <img src={securityImg} className="card-img-top" alt="Security Service" style={{ height: '240px', objectFit: 'cover' }} />
                  <div className="card-body p-4">
                    <div className="mb-3">
                      <i className="bi bi-shield-lock-fill fs-1 text-danger"></i>
                    </div>
                    <h4 className="fw-bold mb-3">Security Service</h4>
                    <p className="card-text" style={{ color: '#6c757d' }}>
                      Professional security personnel trained to maintain order, manage access control, 
                      and ensure the safety of all attendees and assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* President / Leadership Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <img 
                  src={presidentImg} 
                  alt="President - Hope Events" 
                  className="img-fluid rounded-4 shadow"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="col-lg-7">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                  LEADERSHIP
                </span>
                <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                  Message from Our President
                </h2>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  "Excellence is not just a goal, it's our standard."
                </p>
                <p style={{ color: '#6c757d' }}>
                  At Hope Events Ltd, we understand that every event is unique and requires meticulous 
                  attention to detail. Our team is committed to providing unparalleled service that exceeds 
                  expectations. We take pride in our well-trained staff who embody professionalism, discipline, 
                  and a passion for creating seamless event experiences.
                </p>
                <hr className="my-4" style={{ width: '50px', borderColor: '#dc2626', borderWidth: '2px' }} />
                <div>
                  <h5 className="fw-bold mb-0">Baraka Aimée joseline</h5>
                  <p className="text-danger">President, Hope Events Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                Why Choose Hope Events?
              </h2>
              <p className="lead" style={{ color: '#6c757d' }}>
                The trusted partner for events of all sizes
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-trophy-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Professional Excellence</h4>
                  <p style={{ color: '#6c757d' }}>
                    Highly trained staff with expertise in protocol, ushering, and security services.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-calendar-check-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Seamless Operations</h4>
                  <p style={{ color: '#6c757d' }}>
                    From start to finish, we ensure smooth event execution with precision and care.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Based in Rusizi</h4>
                  <p style={{ color: '#6c757d' }}>
                    Proudly serving Rusizi-Kamembe and Western Province with dedicated local expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          marginBottom: 0
        }}>
          <div className="container py-5 text-center">
            <h2 className="display-4 fw-bold text-white mb-3">
              Ready to Make Your Event Exceptional?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Contact us today to discuss your event needs and let us handle the details.
            </p>
            <Link to="/booking" className="btn btn-light btn-lg px-5 py-3 fw-semibold" style={{ 
              borderRadius: '50px',
              color: '#dc2626',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}>
              Book Your Event Now →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;