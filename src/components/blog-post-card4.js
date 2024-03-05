import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card4.css'

const BlogPostCard4 = (props) => {
  return (
    <div className={`blog-post-card4-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        loading="lazy"
        className="blog-post-card4-image"
      />
      <div className="blog-post-card4-container">
        <h2 className="blog-post-card4-text">{props.date}</h2>
        <span className="blog-post-card4-text1">{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=900',
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageAlt: 'image',
  label: 'Food & Drink',
  date: 'JULY 24',
  rootClassName: '',
}

BlogPostCard4.propTypes = {
  imageSrc: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  label: PropTypes.string,
  date: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard4
