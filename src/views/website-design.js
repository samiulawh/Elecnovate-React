import React from 'react'

import { Helmet } from 'react-helmet'

import './website-design.css'

const WebsiteDesign = (props) => {
  return (
    <div className="website-design-container">
      <Helmet>
        <title>
          Website-Design - Elevate Your Brand with Stunning Graphic Design |
          Graphic Design
        </title>
        <meta
          name="description"
          content="Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life."
        />
        <meta
          property="og:title"
          content="Website-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design"
        />
        <meta
          property="og:description"
          content="Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨"
        />
      </Helmet>
      <div className="website-design-hero">
        <div className="website-design-container01">
          <h1 className="website-design-text">Web Design</h1>
          <span className="website-design-text01">
            <span>
              Navigate the digital landscape with exceptional website design.
              Each website is not just a digital presence but a crafted
              experience. Explore my portfolio to see how I merge aesthetics
              with functionality, creating online spaces that leave a lasting
              impression.
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="website-design-btn-group">
            <button className="website-design-button button">
              Get Started
            </button>
            <button className="website-design-button1 button">
              Learn More
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;w=1200"
          className="website-design-image"
        />
      </div>
      <div className="website-design-features">
        <h1 className="website-design-text05">CREATE SOMETHING GREAT</h1>
        <span className="website-design-text06">
          <span className="website-design-text07">
            At the core of our business is development. We are delivering
            efficient, scalable, and thoroughly tested solutions.
          </span>
          <br></br>
          <span>Empowering Your Vision with Cutting-Edge Solutions.</span>
          <br></br>
          <br></br>
        </span>
        <button className="website-design-button2 button">Learn More</button>
        <div className="website-design-container02"></div>
      </div>
      <div className="website-design-testimonial">
        <div className="website-design-container03">
          <h1 className="website-design-text12">
            <span>We believe in collaboration and innovation</span>
            <br></br>
          </h1>
          <span className="website-design-text15">
            Versatile web design and development services committed to
            transforming your concepts into captivating online realities.
            Let&apos;s bring your ideas to life!
          </span>
          <div className="website-design-container04"></div>
        </div>
      </div>
      <div className="website-design-gallery">
        <div className="website-design-container05">
          <div className="website-design-container06">
            <h1 className="website-design-text16">Ecommerce</h1>
            <span className="website-design-text17">
              Lorem ipsum dolor sit amet
            </span>
          </div>
        </div>
        <div className="website-design-container07">
          <div className="website-design-container08">
            <h1 className="website-design-text18">Blog</h1>
            <span className="website-design-text19">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container09">
          <div className="website-design-container10">
            <h1 className="website-design-text21">Portfolio</h1>
            <span className="website-design-text22">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container11">
          <div className="website-design-container12">
            <h1 className="website-design-text24">
              <span className="website-design-text25">Landing Page</span>
              <br></br>
              <br className="website-design-text27"></br>
            </h1>
            <span className="website-design-text28">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container13">
          <div className="website-design-container14">
            <h1 className="website-design-text30">
              Content Management System (CMS) Integration
            </h1>
            <span className="website-design-text31">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
        <div className="website-design-container15">
          <div className="website-design-container16">
            <h1 className="website-design-text33">Project Title</h1>
            <span className="website-design-text34">
              <span>Lorem ipsum dolor sit amet</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteDesign
