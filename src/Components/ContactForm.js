import React from 'react';

export const ContactForm = () => {
    return (
        <form>
            <h2>Contact Form</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}