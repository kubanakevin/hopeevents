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



function Services() {
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
            <h1 className="display-3 fw-bold text-white mb-3">Our Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                WHAT WE OFFER
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                Comprehensive Event Support Services
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                We provide highly trained personnel to ensure your event runs smoothly from start to finish
              </p>
            </div>

            {/* Service 1 - Protocol Service */}
            <div className="row align-items-center mb-5 py-4">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={service1Img} 
                  alt="Protocol Service" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-megaphone-fill fs-1 text-danger"></i>
                  </div>
                </div>
                <h3 className="display-6 fw-bold mb-3" style={{ color: '#1a1a2e' }}>Protocol Service</h3>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  Professional protocol management for VIP guests and dignitaries
                </p>
                <p style={{ color: '#6c757d' }}>
                  Our protocol team ensures that distinguished guests receive the highest level of service 
                  and attention. We handle everything from reception to seating arrangements, ensuring 
                  proper etiquette and coordination throughout your event.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>VIP reception and greeting</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Proper seating arrangements</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Dignitary escort and coordination</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Protocol etiquette and formalities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 - Ushering Service */}
            <div className="row align-items-center mb-5 py-4 flex-lg-row-reverse">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={service2Img} 
                  alt="Ushering Service" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-people-fill fs-1 text-danger"></i>
                  </div>
                </div>
                <h3 className="display-6 fw-bold mb-3" style={{ color: '#1a1a2e' }}>Ushering Service</h3>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  Well-trained ushers to guide and assist your guests
                </p>
                <p style={{ color: '#6c757d' }}>
                  Our ushering team creates a welcoming atmosphere and ensures guests feel comfortable 
                  and well-directed. They manage seating, provide information, and assist with any 
                  guest needs throughout the event.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Guest reception and welcome</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Seating arrangement management</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Direction and guidance for attendees</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Program flow assistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 - Security Service */}
            <div className="row align-items-center py-4">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={securityImg} 
                  alt="Security Service" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px', width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-shield-lock-fill fs-1 text-danger"></i>
                  </div>
                </div>
                <h3 className="display-6 fw-bold mb-3" style={{ color: '#1a1a2e' }}>Security Service</h3>
                <p className="lead mb-3" style={{ color: '#4b5563' }}>
                  Professional security personnel for event safety and order
                </p>
                <p style={{ color: '#6c757d' }}>
                  Our security team is trained to maintain order, manage access control, and ensure the 
                  safety of all attendees, staff, and assets. We provide a secure environment that allows 
                  everyone to focus on enjoying the event.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Access control and crowd management</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>VIP protection and escort</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Emergency response coordination</span>
                  </li>
                  <li className="mb-2 d-flex align-items-center gap-2">
                    <i className="bi bi-check-circle-fill text-danger"></i>
                    <span>Asset and equipment monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                MORE SERVICES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                Additional Support Services
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive event solutions tailored to your needs
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-ticket-perforated fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Ticket Collection</h4>
                  <p className="text-muted">
                    Professional ticket verification and collection at event entrance points.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-car-front-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Parking Management</h4>
                  <p className="text-muted">
                    Organized parking coordination to ensure smooth vehicle flow and safety.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-chat-dots-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Information Desk</h4>
                  <p className="text-muted">
                    Staffed information points to answer questions and assist attendees.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-4" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-calendar-event-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Event Coordination</h4>
                  <p className="text-muted">
                    Overall event flow management and coordination support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img 
                  src={about2Img} 
                  alt="Why Choose Us" 
                  className="img-fluid rounded-4 shadow-lg"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <div className="col-lg-6">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                  WHY CHOOSE US
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1a1a2e' }}>
                  What Makes Our Services Different
                </h2>
                <div className="mb-4">
                  <div className="d-flex gap-3 mb-3">
                    <i className="bi bi-trophy-fill text-danger fs-4"></i>
                    <div>
                      <h5 className="fw-bold mb-1">Highly Trained Staff</h5>
                      <p className="text-muted mb-0">All personnel undergo rigorous training and continuous development.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <i className="bi bi-briefcase-fill text-danger fs-4"></i>
                    <div>
                      <h5 className="fw-bold mb-1">Professional Appearance</h5>
                      <p className="text-muted mb-0">Our team presents a polished, uniformed image at every event.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mb-3">
                    <i className="bi bi-clock-fill text-danger fs-4"></i>
                    <div>
                      <h5 className="fw-bold mb-1">Reliable & Punctual</h5>
                      <p className="text-muted mb-0">We arrive early and stay until every task is complete.</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <i className="bi bi-geo-alt-fill text-danger fs-4"></i>
                    <div>
                      <h5 className="fw-bold mb-1">Local Expertise</h5>
                      <p className="text-muted mb-0">Based in Rusizi-Kamembe, serving Western Province with dedication.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Types We Serve */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                EVENT TYPES
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                Events We Serve
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                From corporate functions to social gatherings, we handle it all
              </p>
            </div>
            <div className="row g-3">
              <div className="col-md-4 col-lg-2">
                <div className="text-center p-3">
                  <i className="bi bi-building fs-1 text-danger"></i>
                  <p className="mt-2 fw-semibold mb-0">Corporate Events</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="text-center p-3">
                  <i className="bi bi-gem fs-1 text-danger"></i>
                  <p className="mt-2 fw-semibold mb-0">Weddings</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="text-center p-3">
                  <i className="bi bi-mic fs-1 text-danger"></i>
                  <p className="mt-2 fw-semibold mb-0">Conferences</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="text-center p-3">
                  <i className="bi bi-music-note-beamed fs-1 text-danger"></i>
                  <p className="mt-2 fw-semibold mb-0">Concerts</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="text-center p-3">
                  <i className="bi bi-trophy fs-1 text-danger"></i>
                  <p className="mt-2 fw-semibold mb-0">Sports Events</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="text-center p-3">
                  <i className="bi bi-people fs-1 text-danger"></i>
                  <p className="mt-2 fw-semibold mb-0">Private Parties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Packages CTA */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
                  <div className="card-body p-5">
                    <h3 className="display-6 fw-bold text-white mb-3">Custom Packages Available</h3>
                    <p className="lead text-white-50 mb-4">
                      We offer flexible packages tailored to your specific event requirements and budget.
                    </p>
                    <Link to="/booking" className="btn btn-danger btn-lg px-5 py-3 fw-semibold" style={{ borderRadius: '50px' }}>
                      Request a Quote →
                    </Link>
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
              Ready to Book Our Services?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Contact us today to discuss your event needs and secure your date.
            </p>
            <Link to="/booking" className="btn btn-light btn-lg px-5 py-3 fw-semibold" style={{ 
              borderRadius: '50px',
              color: '#dc2626',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
            }}>
              Book Now →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;