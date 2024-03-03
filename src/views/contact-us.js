import React from 'react'

import { Helmet } from 'react-helmet'

import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>Contact-us - Elecnovate</title>
        <meta property="og:title" content="Contact-us - Elecnovate" />
      </Helmet>
      <div className="contact-us-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGNvbnRhY3R8ZW58MHx8fHwxNzA5NDU0NTEzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="contact-us-image"
        />
        <div className="contact-us-container1">
          <h2 className="contact-us-text">
            Contact Us – Let&apos;s Maintain Organizational Excellence
          </h2>
          <h2 className="contact-us-text01">
            Welcome here, where seamless communication meets organizational
            excellence.
          </h2>
          <p className="contact-us-text02">
            <span className="contact-us-text03">
              Thanks for exploring our Enclave! We want to hear from you and
              discuss how we can bring your creative ideas to life. You can
              contact us through these channels:
            </span>
            <br className="contact-us-text04"></br>
            <br></br>
          </p>
          <p className="contact-us-text06">
            <span className="contact-us-text07">Email:</span>
            <br></br>
            <span>📧 contact@yourdesignstudio.com</span>
            <br></br>
            <br></br>
            <span className="contact-us-text12">Phone:</span>
            <br></br>
            <span>📞 +92 331 7442767</span>
            <br></br>
            <br></br>
          </p>
          <div className="contact-us-btn-group">
            <button className="contact-us-button button">Get Started</button>
            <button className="contact-us-button1 button">Learn More</button>
          </div>
          <p className="contact-us-text17">
            <span>
              At Elecnovate, we want to turn ideas into stunning reality.
              Whether you&apos;re looking for great branding, eye-catching
              images or innovative web design, we&apos;re here to make it
              happen.
            </span>
            <br></br>
            <br></br>
            <span>
              We are dedicated to delivering high quality and impactful designs
              that resonate with your audience. We thrive on collaboration and
              every project is an opportunity to create something unique and
              memorable.
            </span>
            <br></br>
            <br></br>
            <span>
              If you are considering a project or would like to learn more about
              our services, please do not hesitate to get in touch. We look
              forward to teaming up with you and exploring the possibilities of
              turning your ideas into amazing designs!
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
