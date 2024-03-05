import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import UserInterfaceExperience from './views/user-interface-experience'
import ContactUs from './views/contact-us'
import AboutUs from './views/about-us'
import DevelopmentExcellenceHub from './views/development-excellence-hub'
import GraphicDesign from './views/graphic-design'
import Home from './views/home'
import DesignFeatures from './views/design-features'
import SocialMediaDesign from './views/social-media-design'
import OurStory from './views/our-story'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={UserInterfaceExperience}
          exact
          path="/user-interface-experience"
        />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route
          component={DevelopmentExcellenceHub}
          exact
          path="/development-excellence-hub"
        />
        <Route component={GraphicDesign} exact path="/graphic-design" />
        <Route component={Home} exact path="/" />
        <Route component={DesignFeatures} exact path="/design-features" />
        <Route
          component={SocialMediaDesign}
          exact
          path="/social-media-design"
        />
        <Route component={OurStory} exact path="/our-story" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
