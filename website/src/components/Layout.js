import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

class Layout extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <Container>{this.props.children}</Container>
    )
  }
}
export default Layout
