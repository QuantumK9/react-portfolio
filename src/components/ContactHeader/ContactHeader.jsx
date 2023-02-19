import React from "react";
import "./ContactHeader.css";

export default function ContactHeader() {
  return (
    <div class="contact-header-wrapper">
      <h1 class="contact-header">Get in touch !!</h1>

      <p class="contact-paragraph ">Go ahead... Don't be shy</p>

      <div class="social-wrapper">
        <a href="tel:+97254-905-0351" class="social-link-wrapper ">
          <img
            src="https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/5f4f458afe5898a6ab9b58b8_Circle%20Button.svg"
            loading="lazy"
            alt="Social icon - Call"
          />
        </a>
        <a href="#" target="_blank" class="social-link-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/5f4f471c34c9ef7c52cab8f7_Circle%20Button%20Inst.svg"
            loading="lazy"
            alt="Social icon - instagram"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/edgar-deiner-73a2591bb"
          class="social-link-wrapper"
        >
          <img
            src="https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/5f4f471cbe6a68b28bb19abb_Circle%20Button%20In.svg"
            loading="lazy"
            alt=""
          />
        </a>
        <a href="mailto:deiner.edgar@gmail.com" class="social-link-wrapper">
          <img
            src="https://uploads-ssl.webflow.com/5f4bcd5217865e26e2333f3d/5f4f471c59f25d5bfd08ba05_Circle%20Button%20Mail.svg"
            loading="lazy"
            alt="Social icon - email"
          />
        </a>
      </div>
    </div>
  );
}
