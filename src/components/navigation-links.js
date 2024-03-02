import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/graphic-design" className="navigation-links-navlink">
        {props.graphicDesign}
      </Link>
      <Link to="/social-media-design" className="navigation-links-navlink1">
        {props.socialMediaDesign}
      </Link>
      <Link
        to="/user-interface-experience"
        className="navigation-links-navlink2"
      >
        {props.userInterfaceUserExperience}
      </Link>
      <Link to="/website-design" className="navigation-links-navlink3">
        {props.websiteDesign}
      </Link>
      <span className="navigation-links-text">{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Blog',
  graphicDesign: 'Graphic Design',
  websiteDesign: 'Website Design',
  socialMediaDesign: 'Social Media Design',
  userInterfaceUserExperience: 'UI & UX',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  graphicDesign: PropTypes.string,
  websiteDesign: PropTypes.string,
  socialMediaDesign: PropTypes.string,
  userInterfaceUserExperience: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
