import React from 'react'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>Chat app</p>
        </footer>
      </div>
    );
  }
}