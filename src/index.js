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
import DevelopmentExcellenceHub from './views/development-excellence-hub'
import GraphicDesign from './views/graphic-design'
import Home from './views/home'
import WebsiteDesign from './views/website-design'
import DesignFeatures from './views/design-features'
import OurStory from './views/our-story'
import SocialMediaDesign from './views/social-media-design'
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
        <Route
          component={DevelopmentExcellenceHub}
          exact
          path="/development-excellence-hub"
        />
        <Route component={GraphicDesign} exact path="/graphic-design" />
        <Route component={Home} exact path="/" />
        <Route component={WebsiteDesign} exact path="/website-design" />
        <Route component={DesignFeatures} exact path="/design-features" />
        <Route component={OurStory} exact path="/our-story" />
        <Route
          component={SocialMediaDesign}
          exact
          path="/social-media-design"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
