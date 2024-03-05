import React from 'react'

import PropTypes from 'prop-types'

import './feature-card17.css'

const FeatureCard17 = (props) => {
  return (
    <div className={`feature-card17-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card17-text">{props.title}</h2>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card17-image"
      />
    </div>
  )
}

FeatureCard17.defaultProps = {
  title: 'Lorem ipsum',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
}

FeatureCard17.propTypes = {
  title: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard17
