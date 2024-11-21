// contactForm.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="w-full py-16 px-4 text-center bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-[0_0_10px_#08f]">
        Get in Touch
      </h2>
      {stateMessage && (
        <div className="mb-4 text-center text-lg text-green-400">
          {stateMessage}
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full p-3 border rounded-lg bg-[#1e293b] border-gray-600 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg bg-[#1e293b] border-gray-600 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full p-3 border rounded-lg bg-[#1e293b] border-gray-600 text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

// Export the ContactUs component
export default ContactUs;
