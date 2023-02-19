import React from "react";
import ContactForm from "../components/ContactForm/ContactForm.js";
import ContactHeader from "../components/ContactHeader/ContactHeader.jsx";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <Footer />
    </div>
  );
}
