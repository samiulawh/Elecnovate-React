import React from 'react'

import { Helmet } from 'react-helmet'

import './design-features.css'

const DesignFeatures = (props) => {
  return (
    <div className="design-features-container">
      <Helmet>
        <title>Design-Features - Elecnovate</title>
        <meta property="og:title" content="Design-Features - Elecnovate" />
      </Helmet>
      <div className="design-features-hero">
        <div className="design-features-container1">
          <h1 className="design-features-text">Features</h1>
          <span className="design-features-text01">
            <span className="design-features-text02">
              🌐 Digital Dexterity: 
            </span>
            <br className="design-features-text03"></br>
            <span className="design-features-text04">
              In the digital age, the canvas of graphic design is
              ever-expanding. I navigate this vast landscape with dexterity,
              incorporating responsive design principles, interactive elements,
              and user-centric experiences. From mobile interfaces to desktop
              platforms, my designs seamlessly adapt to diverse digital
              environments.
            </span>
            <br></br>
            <br></br>
            <span className="design-features-text07">⏳ Enduring Results:</span>
            <br className="design-features-text08"></br>
            <span className="design-features-text09">
              While trends add a layer of freshness, my commitment goes beyond
              the ephemeral. I believe in creating designs with lasting
              resonance. Each visual element is meticulously crafted to stand
              the test of time, ensuring that the results not only meet the
              current aesthetic expectations but also maintain relevance in the
              years to come.
            </span>
            <br></br>
            <br></br>
            <span className="design-features-text12">
              🤝 Collaborative Excellence:
            </span>
            <br className="design-features-text13"></br>
            <span className="design-features-text14">
              The key to lasting results lies in collaborative excellence. By
              engaging closely with clients, understanding their goals, and
              aligning design solutions with their brand narrative, I ensure
              that the visual identity not only follows current trends but
              becomes a timeless representation of their essence.
            </span>
            <br></br>
            <br></br>
            <span className="design-features-text17">
              💡 Innovation and Tradition:
            </span>
            <br className="design-features-text18"></br>
            <span className="design-features-text19">
              I navigate the delicate balance between innovation and tradition.
              By infusing contemporary design trends with timeless principles, I
              create a visual language that resonates across eras. This approach
              ensures that my designs not only catch the eye today but continue
              to captivate and communicate effectively over the long haul.
            </span>
            <br></br>
            <br></br>
            <span className="design-features-text22">
              In summary, my graphic design ethos revolves around adaptability,
              digital fluency, enduring results, collaborative excellence, and a
              harmonious blend of innovation and tradition. It&apos;s not just
              about following trends; it&apos;s about creating designs that
              withstand the test of time while remaining visually impactful and
              relevant.
            </span>
            <br></br>
            <span>
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
          <button className="design-features-button button">Get Started</button>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1200"
          className="design-features-image"
        />
      </div>
    </div>
  )
}

export default DesignFeatures
