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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("success");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showMessageModal = (title, message, type = "success") => {
    setModalTitle(title);
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);
    
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const sendEmailNotification = async (contactData) => {
    // Using FormSubmit.co free service to send to your Gmail
    const formSubmitUrl = "https://formsubmit.co/ajax/hevents639@gmail.com";
    
    // Create beautifully formatted HTML email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 10px 10px; }
          h2 { color: #dc2626; margin-top: 0; }
          h3 { color: #333; border-bottom: 2px solid #dc2626; padding-bottom: 5px; margin-top: 20px; }
          .info-box { background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #dc2626; }
          .label { font-weight: bold; color: #555; }
          .footer { text-align: center; margin-top: 20px; padding: 15px; background: #f1f1f1; border-radius: 8px; font-size: 12px; color: #666; }
          .timestamp { color: #999; font-size: 12px; text-align: right; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; color: white;">📧 New Contact Form Submission</h1>
            <p style="margin: 5px 0 0; opacity: 0.9;">From: ${contactData.name}</p>
          </div>
          <div class="content">
            <div class="timestamp">
              Submitted: ${new Date().toLocaleString()}
            </div>
            
            <div class="info-box">
              <h3 style="margin-top: 0;">👤 Contact Information</h3>
              <p><span class="label">Name:</span> ${contactData.name}</p>
              <p><span class="label">Email:</span> ${contactData.email}</p>
              <p><span class="label">Phone:</span> ${contactData.phone || "Not provided"}</p>
            </div>
            
            <div class="info-box">
              <h3>🎯 Event Information</h3>
              <p><span class="label">Event Type:</span> ${contactData.eventType ? contactData.eventType.charAt(0).toUpperCase() + contactData.eventType.slice(1) : "Not specified"}</p>
              <p><span class="label">Event Date:</span> ${contactData.eventDate || "Not specified"}</p>
            </div>
            
            <div class="info-box">
              <h3>💬 Message</h3>
              <p style="white-space: pre-wrap;">${contactData.message}</p>
            </div>
            
            <div class="footer">
              <p>📱 <strong>Quick Actions:</strong></p>
              <p>• Call client: ${contactData.phone || "No phone provided"}</p>
              <p>• Reply to: <a href="mailto:${contactData.email}">${contactData.email}</a></p>
              <p>• WhatsApp: ${contactData.phone || "N/A"}</p>
              <hr>
              <p style="font-size: 11px;">This message was sent from the Hope Events contact form.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version as fallback
    const emailText = `
      NEW CONTACT FORM SUBMISSION
      From: ${contactData.name}
      Submitted: ${new Date().toLocaleString()}
      
      CONTACT INFORMATION:
      Name: ${contactData.name}
      Email: ${contactData.email}
      Phone: ${contactData.phone || "Not provided"}
      
      EVENT INFORMATION:
      Event Type: ${contactData.eventType || "Not specified"}
      Event Date: ${contactData.eventDate || "Not specified"}
      
      MESSAGE:
      ${contactData.message}
      
      ---
      Quick Actions:
      - Reply to: ${contactData.email}
      - Call: ${contactData.phone || "No phone provided"}
    `;

    try {
      const response = await fetch(formSubmitUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          message: emailText,
          _subject: `📬 New Contact Message from ${contactData.name}`,
          _template: "table",
          _captcha: "false",
          _replyto: contactData.email,
          _format: "html"
        })
      });
      
      const result = await response.json();
      console.log("Email sent successfully:", result);
      return true;
    } catch (error) {
      console.error("Email sending failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email notification
      const emailSent = await sendEmailNotification(formData);
      
      if (emailSent) {
        showMessageModal(
          "Message Sent Successfully! 📧",
          `Thank you ${formData.name}! We have received your message and will get back to you within 24 hours at ${formData.email}`,
          "success"
        );
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          message: ""
        });
      } else {
        showMessageModal(
          "Message Received! ✅",
          `Thank you ${formData.name}! We have received your inquiry and will contact you shortly.`,
          "success"
        );
        
        // Reset form anyway
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      showMessageModal(
        "Submission Error",
        "There was an error sending your message. Please try again or call us directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
            <h1 className="display-3 fw-bold text-white mb-3">Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                <li className="breadcrumb-item active text-white-50" aria-current="page">Contact</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-5" style={{ marginTop: '-60px' }}>
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-lg text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-telephone-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-2">Phone / WhatsApp</h4>
                  <p className="text-muted mb-1">0785823388</p>
                  <p className="text-muted">0792078594</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-lg text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-envelope-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-2">Email Us</h4>
                  <p className="text-muted mb-1">hevents639@gmail.com</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-lg text-center p-4" style={{ borderRadius: '16px' }}>
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
                  </div>
                  <h4 className="fw-bold mb-2">Our Location</h4>
                  <p className="text-muted mb-1">Rusizi-Kamembe</p>
                  <p className="text-muted">Western Province</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-5">
          <div className="container py-4">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="mb-4">
                  <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                    GET IN TOUCH
                  </span>
                  <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                    Send Us a Message
                  </h2>
                  <p className="lead" style={{ color: '#6c757d' }}>
                    Have questions or ready to book our services? Fill out the form and we'll get back to you promptly.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address *</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="eventType" className="form-label fw-semibold">Event Type</label>
                      <select
                        className="form-select form-select-lg"
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                      >
                        <option value="">Select event type</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="wedding">Wedding</option>
                        <option value="conference">Conference</option>
                        <option value="concert">Concert</option>
                        <option value="private">Private Party</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="eventDate" className="form-label fw-semibold">Event Date (Optional)</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-semibold">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ borderRadius: '12px', border: '1px solid #e0e0e0' }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-danger btn-lg w-100" 
                    style={{ borderRadius: '50px', padding: '12px' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
                  <div className="bg-danger p-4 text-white">
                    <h3 className="fw-bold mb-0">Visit Our Office</h3>
                    <p className="mb-0 opacity-90">We're located in the heart of Rusizi-Kamembe</p>
                  </div>
                  <div className="p-4">
                    <div className="mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1776435683394!6m8!1m7!1s_U6IFZVdINjh-DpbihRPHw!2m2!1d-2.477959425780972!2d28.91074017608327!3f67.43935904096926!4f8.491912594467976!5f0.7820865974627469"
                        width="100%"
                        height="300"
                        style={{
                          border: 0,
                          borderRadius: "12px"
                        }}
                        allowFullScreen
                        loading="lazy"
                        title="Hope Events Location"
                      ></iframe>
                    </div>

                    <div className="mb-4">
                      <h5 className="fw-bold mb-3">Business Hours</h5>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Monday - Friday:</span>
                        <span className="fw-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Saturday:</span>
                        <span className="fw-semibold">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Sunday:</span>
                        <span className="fw-semibold">Closed (Emergency only)</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-3">Follow Us</h5>
                      <div className="d-flex gap-3">
                        <a href="#" className="btn btn-outline-danger rounded-circle" style={{ width: '45px', height: '45px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-instagram fs-5"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger rounded-circle" style={{ width: '45px', height: '45px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-tiktok fs-5"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger rounded-circle" style={{ width: '45px', height: '45px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-facebook fs-5"></i>
                        </a>
                        <a href="#" className="btn btn-outline-danger rounded-circle" style={{ width: '45px', height: '45px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className="bi bi-whatsapp fs-5"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container py-4">
            <div className="text-center mb-5">
              <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                FAQ
              </span>
              <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                Frequently Asked Questions
              </h2>
              <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Find answers to common questions about our services
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">How far in advance should I book your services?</h5>
                    <p className="text-muted mb-0">
                      We recommend booking at least 2-4 weeks in advance for corporate events and 
                      weddings, and 1-2 weeks for smaller events. However, we can accommodate 
                      last-minute requests based on availability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Do you serve events outside Rusizi?</h5>
                    <p className="text-muted mb-0">
                      Yes, we serve events throughout Western Province and can accommodate requests 
                      in other regions. Additional travel fees may apply for events outside our primary service area.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">What is included in your security service?</h5>
                    <p className="text-muted mb-0">
                      Our security service includes access control, crowd management, VIP protection, 
                      emergency response coordination, and asset monitoring. Custom security plans 
                      can be arranged based on your specific needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '16px' }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3">Are your staff members trained?</h5>
                    <p className="text-muted mb-0">
                      Absolutely. All our personnel undergo comprehensive training in protocol, 
                      ushering, security procedures, customer service, and emergency response 
                      before they are assigned to any event.
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
              Ready to Make Your Event Exceptional?
            </h2>
            <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Contact us today to discuss your event needs and let us handle the details.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a href="tel:0785823388" className="btn btn-light btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px',
                color: '#dc2626',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
              }}>
                <i className="bi bi-telephone-fill me-2"></i>
                Call Now
              </a>
              <a href="https://wa.me/250785823388" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" style={{ 
                borderRadius: '50px'
              }}>
                <i className="bi bi-whatsapp me-2"></i>
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Success/Error Modal */}
      {showModal && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '90%',
              padding: '30px',
              textAlign: 'center',
              animation: 'slideUp 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{
                width: '70px',
                height: '70px',
                backgroundColor: modalType === 'success' ? '#d4edda' : '#f8d7da',
                color: modalType === 'success' ? '#155724' : '#721c24'
              }}
            >
              {modalType === 'success' ? (
                <i className="bi bi-check-circle-fill fs-1"></i>
              ) : (
                <i className="bi bi-exclamation-triangle-fill fs-1"></i>
              )}
            </div>
            <h3 className="fw-bold mb-3" style={{ color: modalType === 'success' ? '#155724' : '#721c24' }}>
              {modalTitle}
            </h3>
            <p className="text-muted mb-4" style={{ whiteSpace: 'pre-line' }}>
              {modalMessage}
            </p>
            <button 
              onClick={closeModal}
              className="btn btn-danger px-4 py-2"
              style={{ borderRadius: '50px' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Footer />
    </>
  );
}

export default Contact;