import React, { useState } from "react";
import "./AboutUs.css";
import Modal from "react-modal";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavigationBar />
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to Online Insurance App, your trusted partner in safeguarding
          what matters most to you. With a rich legacy of providing reliable
          insurance solutions, we stand as a beacon of security in an
          ever-changing world. Here, you can choose from a variety of policies,
          apply discounts and buy them.
        </p>

        <h3>Created by:</h3>
        <p>Rakshit Kaushik</p>
        <p>Sudipto Ghosh</p>
        <p>Kushal Srivastava</p>
        <p>Aditya Pandey</p>
        <p>KM Indu</p>
        <p>
          We are committed to innovation, sustainability, and building lasting
          relationships with our customers. Thank you for choosing us!
        </p>
        <p>
          Thank you for considering our application as your insurance partner.
          We look forward to being there for you, providing protection and peace
          of mind every step of the way.
        </p>

        <p>
          <button className="contact-button" onClick={openModal}>
            Contact Us
          </button>{" "}
          to explore how we can tailor insurance solutions to fit your unique
          needs.
        </p>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
        >
          <h2>Contact Us</h2>
          <p>
            Thank you for your interest in our application. Please feel free to
            reach out to us at the following email addresses:{" "}
            <strong>info@example.com</strong>.
          </p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
