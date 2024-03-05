import React from 'react'

import PropTypes from 'prop-types'

import './feature-card11.css'

const FeatureCard11 = (props) => {
  return (
    <div className={`feature-card11-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card11-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card11-image"
      />
    </div>
  )
}

FeatureCard11.defaultProps = {
  imageAlt: 'image',
  rootClassName: '',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=300',
  title: 'Lorem ipsum',
}

FeatureCard11.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard11
