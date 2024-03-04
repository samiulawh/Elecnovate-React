import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card421.css'

const TestimonialCard421 = (props) => {
  return (
    <div
      className={`testimonial-card421-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="testimonial-card421-icon">
        <path
          d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
          className=""
        ></path>
      </svg>
      <span className="testimonial-card421-text">{props.quote}</span>
      <div className="testimonial-card421-profile">
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="testimonial-card421-image"
        />
        <div className="testimonial-card421-container"></div>
      </div>
    </div>
  )
}

TestimonialCard421.defaultProps = {
  pictureAlt: 'John Doe',
  role: 'Software Engineer',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo nec. Integer egestas, quam eu convallis ultrices, est nisl rutrum tellus, sed posuere velit nisi sit amet ante. In a augue porttitor, porta sapien sed, faucibus felis.',
  pictureSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  name: 'John Doe',
}

TestimonialCard421.propTypes = {
  pictureAlt: PropTypes.string,
  role: PropTypes.string,
  quote: PropTypes.string,
  pictureSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  name: PropTypes.string,
}

export default TestimonialCard421
