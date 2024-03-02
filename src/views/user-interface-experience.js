import React from 'react'

import { Helmet } from 'react-helmet'

import './user-interface-experience.css'

const UserInterfaceExperience = (props) => {
  return (
    <div className="user-interface-experience-container">
      <Helmet>
        <title>User-Interface-Experience - Elecnovate</title>
        <meta
          property="og:title"
          content="User-Interface-Experience - Elecnovate"
        />
      </Helmet>
      <div className="user-interface-experience-hero">
        <div className="user-interface-experience-container1">
          <h1 className="user-interface-experience-text">
            APP &amp; WEB UI &amp; UX
          </h1>
          <span className="user-interface-experience-text01">
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
          <div className="user-interface-experience-container2">
            <button className="user-interface-experience-button button">
              RESEARCH &amp; ANALYSIS
            </button>
            <button className="user-interface-experience-button1 button">
              <span className="user-interface-experience-text08">
                <span className="user-interface-experience-text09">
                  DESIGN &amp; PROTOTYPING
                </span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="user-interface-experience-container3">
            <button className="user-interface-experience-button2 button">
              VISUAL DESIGN &amp; TESTING
            </button>
            <button className="user-interface-experience-button3 button">
              ITERATION &amp; COLLABORATION
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1500"
          className="user-interface-experience-image"
        />
      </div>
      <div className="user-interface-experience-hero1">
        <div className="user-interface-experience-container4">
          <h1 className="user-interface-experience-text11">What I Do?</h1>
          <p className="user-interface-experience-text12">Text</p>
          <button className="user-interface-experience-button4 button">
            Get Started
          </button>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1200"
          className="user-interface-experience-image1"
        />
      </div>
    </div>
  )
}

export default UserInterfaceExperience
