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
import presidentImg from "../assets/presidente.jpg";

function About() {
  return (
    <>
      <Header />
      
      <main>
        {/* Page Header / Hero Section */}
        <section className="position-relative" style={{ 
          minHeight: '50vh',
          background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a2e 50%, #16213e 100%)',
          marginTop: '0',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${hero1Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 0
          }} />
          
          <div className="container position-relative text-center" style={{ zIndex: 2, paddingTop: '150px', paddingBottom: '80px' }}>
            <h1 className="display-3 fw-bold text-white mb-3">About Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">About</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-5">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={aboutImg} 
                  alt="Hope Events Team" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="col-lg-6">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                  WHO WE ARE
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1a1a2e' }}>
                  Dedicated Event Support & Management
                </h2>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  Hope Events Ltd is a premier event support and management company based in Rusizi-Kamembe, 
                  Western Province, providing highly trained personnel for protocol, ushering, and security services.
                </p>
                <p style={{ color: '#6c757d' }}>
                  Founded with a vision to elevate event standards in Rwanda, we have grown into a trusted partner 
                  for corporate functions, social gatherings, and private events. Our commitment to professionalism, 
                  discipline, and excellence sets us apart in the industry.
                </p>
                <div className="mt-4">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                          <i className="bi bi-calendar-check text-danger fs-4"></i>
                        </div>
                        <div>
                          <h4 className="fw-bold mb-0">500+</h4>
                          <p className="text-muted mb-0">Events Completed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                          <i className="bi bi-people text-danger fs-4"></i>
                        </div>
                        <div>
                          <h4 className="fw-bold mb-0">50+</h4>
                          <p className="text-muted mb-0">Team Members</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '20px' }}>
                  <div className="text-center mb-4">
                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-bullseye fs-1 text-danger"></i>
                    </div>
                    <h3 className="fw-bold" style={{ color: '#1a1a2e' }}>Our Mission</h3>
                  </div>
                  <p className="lead text-center mb-0" style={{ color: '#4b5563' }}>
                    To deliver exceptional event support services through well-trained, professional staff 
                    who ensure every event runs smoothly, securely, and memorably.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-4" style={{ borderRadius: '20px' }}>
                  <div className="text-center mb-4">
                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                      <i className="bi bi-eye fs-1 text-danger"></i>
                    </div>
                    <h3 className="fw-bold" style={{ color: '#1a1a2e' }}>Our Vision</h3>
                  </div>
                  <p className="lead text-center mb-0" style={{ color: '#4b5563' }}>
                    To become the leading event support provider in Western Province and beyond, 
                    recognized for excellence in protocol, ushering, and security services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                OUR CORE VALUES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                What Drives Us
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                The principles that guide our service delivery and client relationships
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-star-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Excellence</h4>
                  <p style={{ color: '#6c757d' }}>
                    Striving for the highest standards in every service we provide.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-shield-check fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Integrity</h4>
                  <p style={{ color: '#6c757d' }}>
                    Operating with honesty, transparency, and ethical conduct.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-people-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Teamwork</h4>
                  <p style={{ color: '#6c757d' }}>
                    Collaborating effectively to deliver seamless event experiences.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-clock-history fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Reliability</h4>
                  <p style={{ color: '#6c757d' }}>
                    Being dependable and consistent in all our commitments.
                  </p>
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
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="col-lg-7">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                  LEADERSHIP
                </span>
                <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                  Meet Our President
                </h2>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  "Excellence is not just a goal, it's our standard."
                </p>
                <p style={{ color: '#6c757d' }}>
                  At Hope Events Ltd, I've built a team that shares my passion for creating extraordinary 
                  event experiences. Every member of our staff is carefully selected and rigorously trained 
                  to embody professionalism, discipline, and attention to detail.
                </p>
                <p style={{ color: '#6c757d' }}>
                  We understand that behind every successful event is a dedicated team working tirelessly 
                  behind the scenes. Our commitment to excellence has made us a trusted partner for 
                  organizations and individuals across Western Province.
                </p>
                <hr className="my-4" style={{ width: '50px', borderColor: '#dc2626', borderWidth: '2px' }} />
                <div>
                  <h5 className="fw-bold mb-0">Baraka Aimée joseline</h5>
                  <p className="text-danger mb-2">President & Founder</p>
                  <div className="d-flex gap-2">
                    <i className="bi bi-linkedin text-muted"></i>
                    <i className="bi bi-envelope text-muted"></i>
                  </div>
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
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                What makes us the preferred choice for event support services
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <i className="bi bi-person-workspace text-danger fs-4"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Highly Trained Personnel</h4>
                    <p className="text-muted">
                      All staff undergo rigorous training in protocol, customer service, and security procedures.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <i className="bi bi-briefcase-fill text-danger fs-4"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Professional Appearance</h4>
                    <p className="text-muted">
                      Our team presents a polished, professional image that enhances your event's reputation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <i className="bi bi-clock-fill text-danger fs-4"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Punctual & Reliable</h4>
                    <p className="text-muted">
                      We arrive early, stay late, and ensure every aspect of event support is covered.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex gap-3 p-3">
                  <div className="flex-shrink-0">
                    <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                      <i className="bi bi-chat-dots-fill text-danger fs-4"></i>
                    </div>
                  </div>
                  <div>
                    <h4 className="fw-bold mb-2">Excellent Communication</h4>
                    <p className="text-muted">
                      Strong coordination skills ensure smooth operations from start to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ 
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
        }}>
          <div className="container py-5 text-center">
            <h2 className="display-4 fw-bold text-white mb-3">
              Ready to Work With Us?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Let's create memorable events together. Contact us to discuss your next event.
            </p>
            <Link to="/booking" className="btn btn-light btn-lg px-5 py-3 fw-semibold" style={{ 
              borderRadius: '50px',
              color: '#dc2626',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}>
              Get in Touch →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;