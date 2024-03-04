import React from 'react'

import { Helmet } from 'react-helmet'

import './social-media-design.css'

const SocialMediaDesign = (props) => {
  return (
    <div className="social-media-design-container">
      <Helmet>
        <title>
          Social-Media-Design - Elevate Your Brand with Stunning Graphic Design
          | Graphic Design
        </title>
        <meta
          name="description"
          content="Elevate your brand with our comprehensive solutions. From graphic designs and websites to captivating social media visuals we bring your vision to life."
        />
        <meta
          property="og:title"
          content="Social-Media-Design -  Elevate Your Brand with Stunning Graphic Design | Graphic Design"
        />
        <meta
          property="og:description"
          content="Elevate your brand with captivating designs. 🚀 Offering expert Graphic Design, Social Media Creatives, UI/UX Excellence, and Seamless Website Design. Let's bring your ideas to life! 💡🎨"
        />
      </Helmet>
      <div className="social-media-design-features">
        <h1 className="social-media-design-text">Social Media Design</h1>
        <div className="social-media-design-container1"></div>
      </div>
      <div className="social-media-design-hero">
        <h1 className="social-media-design-text01">
          <span className="social-media-design-text02">We Creat Brands</span>
          <br></br>
        </h1>
        <span className="social-media-design-text04">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className="social-media-design-btn-group"></div>
      </div>
      <h2 className="social-media-design-text11">Portfolio</h2>
      <div className="social-media-design-gallery"></div>
      <div className="social-media-design-gallery1"></div>
    </div>
  )
}

export default SocialMediaDesign
