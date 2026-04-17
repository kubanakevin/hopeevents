import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// Import all images from assets
import aboutImg from "../assets/about.jpeg";
import about2Img from "../assets/about2.jpeg";
import hero1Img from "../assets/hero1.jpeg";
import hero2Img from "../assets/hero2.jpeg";
import service1Img from "../assets/service1.jpeg";
import service2Img from "../assets/service2.jpeg";
import presidentImg from "../assets/presidente.jpg";

function BookUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        eventTime: "",
        guestCount: "",
        venue: "",
        services: {
            protocol: false,
            ushering: false,
            security: false,
        },
        specialRequests: "",
        hearAbout: "",
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalType, setModalType] = useState("success"); // success, error, info

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                services: {
                    ...formData.services,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const showMessageModal = (title, message, type = "success") => {
        setModalTitle(title);
        setModalMessage(message);
        setModalType(type);
        setShowModal(true);

        // Auto close after 5 seconds
        setTimeout(() => {
            setShowModal(false);
        }, 5000);
    };

    const sendEmailNotification = async (bookingData) => {
  // Using FormSubmit.co free service with proper HTML formatting
  const formSubmitUrl = "https://formsubmit.co/ajax/hevents639@gmail.com";
  
  // Create a beautifully formatted HTML email
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
        .total { font-size: 24px; font-weight: bold; color: #dc2626; text-align: right; margin-top: 20px; padding-top: 10px; border-top: 2px solid #ddd; }
        .footer { text-align: center; margin-top: 20px; padding: 15px; background: #f1f1f1; border-radius: 8px; font-size: 12px; color: #666; }
        .badge { display: inline-block; background: #dc2626; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; color: white;">🎉 New Booking Request</h1>
          <p style="margin: 5px 0 0; opacity: 0.9;">Booking ID: HOPE${Date.now()}</p>
        </div>
        <div class="content">
          <div class="info-box">
            <h3 style="margin-top: 0;">📋 Contact Information</h3>
            <p><span class="label">👤 Name:</span> ${bookingData.fullName}</p>
            <p><span class="label">📧 Email:</span> ${bookingData.email}</p>
            <p><span class="label">📞 Phone:</span> ${bookingData.phone}</p>
            <p><span class="label">🔍 Heard via:</span> ${bookingData.hearAbout || "Not specified"}</p>
          </div>
          
          <div class="info-box">
            <h3>🎯 Event Details</h3>
            <p><span class="label">📌 Event Type:</span> ${bookingData.eventType}</p>
            <p><span class="label">📅 Event Date:</span> ${bookingData.eventDate}</p>
            <p><span class="label">⏰ Event Time:</span> ${bookingData.eventTime}</p>
            <p><span class="label">👥 Guest Count:</span> ${bookingData.guestCount || "Not specified"}</p>
            <p><span class="label">📍 Venue:</span> ${bookingData.venue}</p>
          </div>
          
          <div class="info-box">
            <h3>🛠️ Selected Services</h3>
            ${getSelectedServices() === "No services selected" ? 
              '<p style="color: red;">⚠️ No services selected</p>' : 
              `<p>${getSelectedServices().split(', ').map(s => `✓ ${s}`).join('<br>')}</p>`
            }
          </div>
          
          <div class="total">
            💰 Total Estimate: ${calculateTotal()} RWF
          </div>
          
          ${bookingData.specialRequests ? `
          <div class="info-box">
            <h3>💬 Special Requests</h3>
            <p>${bookingData.specialRequests}</p>
          </div>
          ` : ''}
          
          <div class="footer">
            <p>📱 Need to contact the client? Call: ${bookingData.phone}</p>
            <p>✉️ Reply directly to: ${bookingData.email}</p>
            <p>⏳ This booking requires confirmation within 24 hours</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  // Plain text version as fallback
  const emailText = `
    NEW BOOKING REQUEST
    Booking ID: HOPE${Date.now()}
    
    CONTACT INFORMATION:
    Name: ${bookingData.fullName}
    Email: ${bookingData.email}
    Phone: ${bookingData.phone}
    Heard via: ${bookingData.hearAbout || "Not specified"}
    
    EVENT DETAILS:
    Event Type: ${bookingData.eventType}
    Event Date: ${bookingData.eventDate}
    Event Time: ${bookingData.eventTime}
    Guest Count: ${bookingData.guestCount || "Not specified"}
    Venue: ${bookingData.venue}
    
    SELECTED SERVICES:
    ${getSelectedServices()}
    
    TOTAL ESTIMATE: ${calculateTotal()} RWF
    
    ${bookingData.specialRequests ? `SPECIAL REQUESTS:\n${bookingData.specialRequests}\n` : ''}
    
    ---
    Need to contact the client? Call: ${bookingData.phone}
    Reply directly to: ${bookingData.email}
  `;

  try {
    const response = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: bookingData.fullName,
        email: bookingData.email,
        phone: bookingData.phone,
        message: emailText,
        _subject: `🎉 NEW BOOKING: ${bookingData.fullName} - ${bookingData.eventType}`,
        _template: "table",
        _captcha: "false",
        _replyto: bookingData.email,
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

    const getSelectedServices = () => {
        const selected = [];
        if (formData.services.protocol) selected.push("Protocol Service");
        if (formData.services.ushering) selected.push("Ushering Service");
        if (formData.services.security) selected.push("Security Service");
        return selected.join(", ") || "No services selected";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Check if at least one service is selected
        if (!formData.services.protocol && !formData.services.ushering && !formData.services.security) {
            showMessageModal(
                "Service Required",
                "Please select at least one service to continue with your booking.",
                "error"
            );
            setIsSubmitting(false);
            return;
        }

        try {
            // Send email notification
            const emailSent = await sendEmailNotification(formData);

            // Here you would typically save to your database
            console.log("Booking form submitted:", formData);

            // Show success modal
            showMessageModal(
                "Booking Request Submitted! 🎉",
                `Thank you ${formData.fullName}! We have received your booking request. Our team will contact you within 24 hours to confirm availability and finalize the details. A confirmation has been sent to ${formData.email}`,
                "success"
            );

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                eventType: "",
                eventDate: "",
                eventTime: "",
                guestCount: "",
                venue: "",
                services: {
                    protocol: false,
                    ushering: false,
                    security: false,
                },
                specialRequests: "",
                hearAbout: "",
            });
            setCurrentStep(1);
        } catch (error) {
            console.error("Submission error:", error);
            showMessageModal(
                "Submission Error",
                "There was an error submitting your booking. Please try again or contact us directly.",
                "error"
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        // Validate current step before proceeding
        if (currentStep === 1) {
            if (!formData.fullName || !formData.email || !formData.phone) {
                showMessageModal(
                    "Missing Information",
                    "Please fill in all required fields (Name, Email, Phone) before proceeding.",
                    "error"
                );
                return;
            }
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showMessageModal(
                    "Invalid Email",
                    "Please enter a valid email address.",
                    "error"
                );
                return;
            }
        }

        if (currentStep === 2) {
            if (!formData.eventType || !formData.eventDate || !formData.eventTime || !formData.venue) {
                showMessageModal(
                    "Missing Information",
                    "Please fill in all required event details (Event Type, Date, Time, Venue) before proceeding.",
                    "error"
                );
                return;
            }
        }

        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
        window.scrollTo(0, 0);
    };

    const servicePrice = {
        protocol: 150000,
        ushering: 100000,
        security: 200000,
    };

    const calculateTotal = () => {
        let total = 0;
        if (formData.services.protocol) total += servicePrice.protocol;
        if (formData.services.ushering) total += servicePrice.ushering;
        if (formData.services.security) total += servicePrice.security;
        return total.toLocaleString();
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
                        <h1 className="display-3 fw-bold text-white mb-3">Book Our Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><Link to="/" className="text-white text-decoration-none">Home</Link></li>
                                <li className="breadcrumb-item active text-white-50" aria-current="page">Book Us</li>
                            </ol>
                        </nav>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="py-5">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="card border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                                    <div className="bg-danger p-4 text-white text-center">
                                        <h2 className="fw-bold mb-2">Event Booking Form</h2>
                                        <p className="mb-0 opacity-90">Fill out the form below to book our professional services</p>
                                    </div>

                                    <div className="card-body p-4 p-lg-5">
                                        {/* Progress Steps */}
                                        <div className="d-flex justify-content-between mb-5">
                                            <div className="text-center" style={{ flex: 1 }}>
                                                <div className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${currentStep >= 1 ? 'bg-danger text-white' : 'bg-light text-muted'}`} style={{ width: '40px', height: '40px' }}>
                                                    1
                                                </div>
                                                <small className={currentStep >= 1 ? 'text-danger fw-semibold' : 'text-muted'}>Contact Info</small>
                                            </div>
                                            <div className="text-center" style={{ flex: 1 }}>
                                                <div className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${currentStep >= 2 ? 'bg-danger text-white' : 'bg-light text-muted'}`} style={{ width: '40px', height: '40px' }}>
                                                    2
                                                </div>
                                                <small className={currentStep >= 2 ? 'text-danger fw-semibold' : 'text-muted'}>Event Details</small>
                                            </div>
                                            <div className="text-center" style={{ flex: 1 }}>
                                                <div className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${currentStep >= 3 ? 'bg-danger text-white' : 'bg-light text-muted'}`} style={{ width: '40px', height: '40px' }}>
                                                    3
                                                </div>
                                                <small className={currentStep >= 3 ? 'text-danger fw-semibold' : 'text-muted'}>Services</small>
                                            </div>
                                            <div className="text-center" style={{ flex: 1 }}>
                                                <div className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${currentStep >= 4 ? 'bg-danger text-white' : 'bg-light text-muted'}`} style={{ width: '40px', height: '40px' }}>
                                                    4
                                                </div>
                                                <small className={currentStep >= 4 ? 'text-danger fw-semibold' : 'text-muted'}>Confirmation</small>
                                            </div>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            {/* Step 1: Contact Information */}
                                            {currentStep === 1 && (
                                                <div>
                                                    <h3 className="fw-bold mb-4">Contact Information</h3>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Full Name *</label>
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-lg"
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            required
                                                            style={{ borderRadius: '12px' }}
                                                            placeholder="Enter your full name"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Email Address *</label>
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-lg"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            style={{ borderRadius: '12px' }}
                                                            placeholder="your@email.com"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Phone Number *</label>
                                                        <input
                                                            type="tel"
                                                            className="form-control form-control-lg"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            required
                                                            style={{ borderRadius: '12px' }}
                                                            placeholder="0785823388"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="form-label fw-semibold">How did you hear about us?</label>
                                                        <select
                                                            className="form-select form-select-lg"
                                                            name="hearAbout"
                                                            value={formData.hearAbout}
                                                            onChange={handleChange}
                                                            style={{ borderRadius: '12px' }}
                                                        >
                                                            <option value="">Select an option</option>
                                                            <option value="social">Social Media</option>
                                                            <option value="friend">Friend/Referral</option>
                                                            <option value="google">Google Search</option>
                                                            <option value="event">Previous Event</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="d-flex justify-content-end">
                                                        <button type="button" className="btn btn-danger btn-lg px-5" onClick={nextStep} style={{ borderRadius: '50px' }}>
                                                            Next Step →
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 2: Event Details */}
                                            {currentStep === 2 && (
                                                <div>
                                                    <h3 className="fw-bold mb-4">Event Details</h3>
                                                    <div className="mb-3">
                                                        <label className="form-label fw-semibold">Event Type *</label>
                                                        <select
                                                            className="form-select form-select-lg"
                                                            name="eventType"
                                                            value={formData.eventType}
                                                            onChange={handleChange}
                                                            required
                                                            style={{ borderRadius: '12px' }}
                                                        >
                                                            <option value="">Select event type</option>
                                                            <option value="Corporate Event">Corporate Event</option>
                                                            <option value="Wedding">Wedding</option>
                                                            <option value="Conference">Conference</option>
                                                            <option value="Concert">Concert</option>
                                                            <option value="Private Party">Private Party</option>
                                                            <option value="Sports Event">Sports Event</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label className="form-label fw-semibold">Event Date *</label>
                                                            <input
                                                                type="date"
                                                                className="form-control form-control-lg"
                                                                name="eventDate"
                                                                value={formData.eventDate}
                                                                onChange={handleChange}
                                                                required
                                                                style={{ borderRadius: '12px' }}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="form-label fw-semibold">Event Time *</label>
                                                            <input
                                                                type="time"
                                                                className="form-control form-control-lg"
                                                                name="eventTime"
                                                                value={formData.eventTime}
                                                                onChange={handleChange}
                                                                required
                                                                style={{ borderRadius: '12px' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">
                                                            <label className="form-label fw-semibold">Expected Guest Count</label>
                                                            <input
                                                                type="number"
                                                                className="form-control form-control-lg"
                                                                name="guestCount"
                                                                value={formData.guestCount}
                                                                onChange={handleChange}
                                                                placeholder="e.g., 100"
                                                                style={{ borderRadius: '12px' }}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 mb-3">
                                                            <label className="form-label fw-semibold">Venue/Location *</label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                name="venue"
                                                                value={formData.venue}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Event venue name and address"
                                                                style={{ borderRadius: '12px' }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between mt-3">
                                                        <button type="button" className="btn btn-outline-secondary btn-lg px-5" onClick={prevStep} style={{ borderRadius: '50px' }}>
                                                            ← Back
                                                        </button>
                                                        <button type="button" className="btn btn-danger btn-lg px-5" onClick={nextStep} style={{ borderRadius: '50px' }}>
                                                            Next Step →
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 3: Select Services */}
                                            {currentStep === 3 && (
                                                <div>
                                                    <h3 className="fw-bold mb-4">Select Services</h3>
                                                    <div className="mb-4">
                                                        <div className="card border mb-3" style={{ borderRadius: '12px' }}>
                                                            <div className="card-body">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="protocol"
                                                                        checked={formData.services.protocol}
                                                                        onChange={handleChange}
                                                                        id="protocol"
                                                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                                                    />
                                                                    <label className="form-check-label ms-3" htmlFor="protocol">
                                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                                            <div>
                                                                                <h5 className="fw-bold mb-1">Protocol Service</h5>
                                                                                <p className="text-muted mb-0">VIP reception, dignitary escort, seating arrangements</p>
                                                                            </div>
                                                                            <span className="fw-bold text-danger">150,000 RWF</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card border mb-3" style={{ borderRadius: '12px' }}>
                                                            <div className="card-body">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="ushering"
                                                                        checked={formData.services.ushering}
                                                                        onChange={handleChange}
                                                                        id="ushering"
                                                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                                                    />
                                                                    <label className="form-check-label ms-3" htmlFor="ushering">
                                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                                            <div>
                                                                                <h5 className="fw-bold mb-1">Ushering Service</h5>
                                                                                <p className="text-muted mb-0">Guest reception, seating guidance, information desk</p>
                                                                            </div>
                                                                            <span className="fw-bold text-danger">100,000 RWF</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card border mb-4" style={{ borderRadius: '12px' }}>
                                                            <div className="card-body">
                                                                <div className="form-check">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        name="security"
                                                                        checked={formData.services.security}
                                                                        onChange={handleChange}
                                                                        id="security"
                                                                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                                                                    />
                                                                    <label className="form-check-label ms-3" htmlFor="security">
                                                                        <div className="d-flex justify-content-between align-items-center w-100">
                                                                            <div>
                                                                                <h5 className="fw-bold mb-1">Security Service</h5>
                                                                                <p className="text-muted mb-0">Access control, crowd management, VIP protection</p>
                                                                            </div>
                                                                            <span className="fw-bold text-danger">200,000 RWF</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="form-label fw-semibold">Special Requests or Comments</label>
                                                        <textarea
                                                            className="form-control"
                                                            name="specialRequests"
                                                            rows="4"
                                                            value={formData.specialRequests}
                                                            onChange={handleChange}
                                                            placeholder="Any specific requirements or additional information..."
                                                            style={{ borderRadius: '12px' }}
                                                        ></textarea>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <button type="button" className="btn btn-outline-secondary btn-lg px-5" onClick={prevStep} style={{ borderRadius: '50px' }}>
                                                            ← Back
                                                        </button>
                                                        <button type="button" className="btn btn-danger btn-lg px-5" onClick={nextStep} style={{ borderRadius: '50px' }}>
                                                            Review Booking →
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 4: Confirmation & Summary */}
                                            {currentStep === 4 && (
                                                <div>
                                                    <h3 className="fw-bold mb-4">Booking Summary</h3>
                                                    <div className="card bg-light mb-4" style={{ borderRadius: '12px' }}>
                                                        <div className="card-body">
                                                            <h5 className="fw-bold mb-3">Contact Information</h5>
                                                            <p className="mb-1"><strong>Name:</strong> {formData.fullName}</p>
                                                            <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
                                                            <p className="mb-1"><strong>Phone:</strong> {formData.phone}</p>
                                                            <p className="mb-3"><strong>Heard via:</strong> {formData.hearAbout || "Not specified"}</p>

                                                            <hr />

                                                            <h5 className="fw-bold mb-3">Event Details</h5>
                                                            <p className="mb-1"><strong>Event Type:</strong> {formData.eventType}</p>
                                                            <p className="mb-1"><strong>Date:</strong> {formData.eventDate}</p>
                                                            <p className="mb-1"><strong>Time:</strong> {formData.eventTime}</p>
                                                            <p className="mb-1"><strong>Guests:</strong> {formData.guestCount || "Not specified"}</p>
                                                            <p className="mb-3"><strong>Venue:</strong> {formData.venue}</p>

                                                            <hr />

                                                            <h5 className="fw-bold mb-3">Selected Services</h5>
                                                            {formData.services.protocol && <p className="mb-1">✓ Protocol Service - 150,000 RWF</p>}
                                                            {formData.services.ushering && <p className="mb-1">✓ Ushering Service - 100,000 RWF</p>}
                                                            {formData.services.security && <p className="mb-1">✓ Security Service - 200,000 RWF</p>}
                                                            {!formData.services.protocol && !formData.services.ushering && !formData.services.security && (
                                                                <p className="text-danger">No services selected</p>
                                                            )}

                                                            {formData.specialRequests && (
                                                                <>
                                                                    <hr />
                                                                    <h5 className="fw-bold mb-3">Special Requests</h5>
                                                                    <p className="mb-0">{formData.specialRequests}</p>
                                                                </>
                                                            )}

                                                            <hr />
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h4 className="fw-bold mb-0">Total Estimate:</h4>
                                                                <h3 className="fw-bold text-danger mb-0">{calculateTotal()} RWF</h3>
                                                            </div>
                                                            <p className="text-muted small mt-2 mb-0">*Final price may vary based on specific requirements</p>
                                                        </div>
                                                    </div>

                                                    <div className="alert alert-info" style={{ borderRadius: '12px' }}>
                                                        <i className="bi bi-info-circle-fill me-2"></i>
                                                        By submitting this booking request, you agree to our terms and conditions. We will contact you within 24 hours to confirm availability and finalize the booking.
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <button type="button" className="btn btn-outline-secondary btn-lg px-5" onClick={prevStep} style={{ borderRadius: '50px' }}>
                                                            ← Back
                                                        </button>
                                                        <button type="submit" className="btn btn-danger btn-lg px-5" disabled={isSubmitting} style={{ borderRadius: '50px' }}>
                                                            {isSubmitting ? (
                                                                <>
                                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                    Submitting...
                                                                </>
                                                            ) : (
                                                                'Submit Booking →'
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Book With Us Section */}
                <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="container py-4">
                        <div className="text-center mb-5">
                            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 mb-3 rounded-pill">
                                WHY BOOK WITH US
                            </span>
                            <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a2e' }}>
                                What Makes Us Different
                            </h2>
                            <p className="lead" style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                                Professional, reliable, and dedicated to excellence
                            </p>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-person-check fs-1 text-danger"></i>
                                    </div>
                                    <h5 className="fw-bold">Trained Staff</h5>
                                    <p className="text-muted small">All personnel professionally trained</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-clock-history fs-1 text-danger"></i>
                                    </div>
                                    <h5 className="fw-bold">Punctual</h5>
                                    <p className="text-muted small">Always on time, always reliable</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-shield-check fs-1 text-danger"></i>
                                    </div>
                                    <h5 className="fw-bold">Secure</h5>
                                    <p className="text-muted small">Top-notch security protocols</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="text-center">
                                    <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className="bi bi-chat-heart fs-1 text-danger"></i>
                                    </div>
                                    <h5 className="fw-bold">24/7 Support</h5>
                                    <p className="text-muted small">Always here to help you</p>
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
                            Need Immediate Assistance?
                        </h2>
                        <p className="lead text-white opacity-90 mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                            Call us directly for urgent bookings or questions about our services
                        </p>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <a href="tel:0785823388" className="btn btn-light btn-lg px-5 py-3 fw-semibold" style={{
                                borderRadius: '50px',
                                color: '#dc2626',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                            }}>
                                <i className="bi bi-telephone-fill me-2"></i>
                                Call: 0785823388
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

export default BookUs;