import React from 'react'
import { Router } from 'react-router'
import routes from '../router'

class AppRoutes extends React.Component {
  render() {
    return (
      <Router routes={routes} history={this.props.history} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}

export default AppRoutes