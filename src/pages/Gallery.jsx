import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import all images from assets
import aboutImg from "../assets/about.jpeg";
import about2Img from "../assets/about2.jpeg";
import hero1Img from "../assets/hero1.jpeg";
import hero2Img from "../assets/hero2.jpeg";
import service1Img from "../assets/service1.jpeg";
import service2Img from "../assets/service2.jpeg";
import presidentImg from "../assets/presidente.jpg";
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";
import g6 from "../assets/security.jpeg";
import g7 from "../assets/g7.jpeg";
import g8 from "../assets/g8.jpeg";
import g9 from "../assets/g9.jpeg";
import g10 from "../assets/g10.jpeg";
import g11 from "../assets/g11.jpeg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const galleryImages = [
    { id: 1, src: g1, category: "protocol", title: "Protocol Service" },
    { id: 2, src: g2, category: "ushering", title: "Ushering Service" },
    { id: 3, src: g3, category: "security", title: "Security Service" },
    { id: 4, src: g4, category: "protocol", title: "VIP Reception" },
    { id: 5, src: g5, category: "ushering", title: "Guest Guidance" },
    { id: 6, src: g6, category: "security", title: "Event Security" },
    { id: 7, src: g7, category: "protocol", title: "Corporate Event" },
    { id: 8, src: g8, category: "ushering", title: "Wedding Ushering" },
    { id: 9, src: g9, category: "security", title: "Crowd Management" },
    { id: 10, src: g10, category: "protocol", title: "Dignitary Protocol" },
    { id: 11, src: g11, category: "ushering", title: "Conference Support" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

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
            <h1 className="display-3 fw-bold text-white mb-3">Our Gallery</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">Gallery</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Gallery Filter Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                OUR WORK
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                Event Moments Captured
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Browse through our gallery showcasing our professional services in action
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
              <button
                onClick={() => setFilter("all")}
                className={`btn ${filter === "all" ? "btn-danger" : "btn-outline-danger"} px-4 py-2 fw-semibold`}
                style={{ borderRadius: '50px' }}
              >
                All Photos
              </button>
              <button
                onClick={() => setFilter("protocol")}
                className={`btn ${filter === "protocol" ? "btn-danger" : "btn-outline-danger"} px-4 py-2 fw-semibold`}
                style={{ borderRadius: '50px' }}
              >
                Protocol Service
              </button>
              <button
                onClick={() => setFilter("ushering")}
                className={`btn ${filter === "ushering" ? "btn-danger" : "btn-outline-danger"} px-4 py-2 fw-semibold`}
                style={{ borderRadius: '50px' }}
              >
                Ushering Service
              </button>
              <button
                onClick={() => setFilter("security")}
                className={`btn ${filter === "security" ? "btn-danger" : "btn-outline-danger"} px-4 py-2 fw-semibold`}
                style={{ borderRadius: '50px' }}
              >
                Security Service
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="row g-4">
              {filteredImages.map((image, index) => (
                <div className="col-md-6 col-lg-4" key={image.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div 
                    className="card border-0 shadow-sm overflow-hidden cursor-pointer"
                    style={{ 
                      borderRadius: '16px', 
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onClick={() => openLightbox(image)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0,0,0,0.05)';
                    }}
                  >
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={image.src} 
                        alt={image.title}
                        style={{ 
                          width: '100%', 
                          height: '280px', 
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        className="gallery-img"
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        padding: '20px',
                        color: 'white',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                      className="image-overlay"
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}>
                        <h5 className="mb-0 fw-semibold">{image.title}</h5>
                        <small className="text-white-50">{image.category}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-5">
                <i className="bi bi-images fs-1 text-muted"></i>
                <p className="text-muted mt-3">No images found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="row g-4 text-center">
              <div className="col-md-3">
                <div className="counter-box">
                  <i className="bi bi-camera-fill fs-1 text-danger mb-3 d-inline-block"></i>
                  <h3 className="display-4 fw-bold text-danger mb-0">500+</h3>
                  <p className="text-muted mb-0">Events Covered</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="counter-box">
                  <i className="bi bi-people-fill fs-1 text-danger mb-3 d-inline-block"></i>
                  <h3 className="display-4 fw-bold text-danger mb-0">50+</h3>
                  <p className="text-muted mb-0">Team Members</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="counter-box">
                  <i className="bi bi-star-fill fs-1 text-danger mb-3 d-inline-block"></i>
                  <h3 className="display-4 fw-bold text-danger mb-0">98%</h3>
                  <p className="text-muted mb-0">Client Satisfaction</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="counter-box">
                  <i className="bi bi-building fs-1 text-danger mb-3 d-inline-block"></i>
                  <h3 className="display-4 fw-bold text-danger mb-0">200+</h3>
                  <p className="text-muted mb-0">Corporate Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video/Testimonial Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="position-relative rounded-4 overflow-hidden shadow-lg">
                  <img 
                    src={g3} 
                    alt="Hope Events Team" 
                    className="img-fluid w-100"
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', cursor: 'pointer' }}>
                      <i className="bi bi-play-fill text-danger fs-1" style={{ marginLeft: '5px' }}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                  TESTIMONIALS
                </span>
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#1a1a2e' }}>
                  What Our Clients Say
                </h2>
                <div className="card border-0 bg-light p-4" style={{ borderRadius: '20px' }}>
                  <i className="bi bi-quote fs-1 text-danger opacity-50 mb-3"></i>
                  <p className="lead mb-4" style={{ color: '#4b5563' }}>
                    "Hope Events provided exceptional service for our corporate conference. Their team was professional, punctual, and highly organized. Our guests were impressed with the seamless coordination."
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '50px', height: '50px' }}>
                      <i className="bi bi-person fs-4"></i>
                    </div>
                    <div>
                      <h5 className="fw-bold mb-0">John Mugabo</h5>
                      <p className="text-muted mb-0">Corporate Client</p>
                    </div>
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
              Want to Be Featured in Our Gallery?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Book our services for your next event and experience excellence in protocol, ushering, and security.
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={closeLightbox}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              style={{ 
                maxWidth: '100%', 
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '-50px',
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'white'
            }}>
              <h4>{selectedImage.title}</h4>
              <p className="text-white-50">{selectedImage.category}</p>
            </div>
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                fontSize: '24px',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        .gallery-img {
          transition: transform 0.5s ease;
        }
        
        .card:hover .image-overlay {
          opacity: 1 !important;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem;
          }
          .display-4 {
            font-size: 2rem;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}

export default Gallery;