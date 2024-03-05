import React from 'react'

import PropTypes from 'prop-types'

import './feature-card16.css'

const FeatureCard16 = (props) => {
  return (
    <div className={`feature-card16-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card16-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card16-image"
      />
    </div>
  )
}

FeatureCard16.defaultProps = {
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  title: 'Lorem ipsum',
}

FeatureCard16.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard16
