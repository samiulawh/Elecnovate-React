import React from 'react'

import PropTypes from 'prop-types'

import './feature-card14.css'

const FeatureCard14 = (props) => {
  return (
    <div className={`feature-card14-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card14-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card14-image"
      />
    </div>
  )
}

FeatureCard14.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&h=400',
  title: 'Lorem ipsum',
  rootClassName: '',
  imageAlt: 'image',
}

FeatureCard14.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default FeatureCard14
