import React from 'react';

export const ContactInfo = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-info">Phone: +1234567890</p>
            <p className="contact-info">Email: 1234567890</p>
            <p className="contact-info">Address: 1234567890</p>
            <p className="contact-info">WhatsApp: +1234567890</p>
            <a href="https://wa.me/1234567890" className="contact-link">
                <button className="whatsapp-button">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </button>
            </a>
        </div>
    );
}