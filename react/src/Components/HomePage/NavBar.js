import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

import { Menu, Responsive } from 'semantic-ui-react';

class navBar extends Component {
  state = {
    activeItem: 'home',
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Responsive as={Menu} minWidth={767} size="large" color="teal" inverted pointing>
        <div className="brand">
          <Menu.Header as="h4" floated="left">
            Chingu Impact
          </Menu.Header>
        </div>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />

        <Menu.Item
          name="contact"
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          as={Link}
          to="/contact"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="signin"
            active={activeItem === 'signin'}
            onClick={this.handleItemClick}
            as={Link}
            to="/signin"
          />
          <Menu.Item
            name="signup"
            active={activeItem === 'signup'}
            onClick={this.handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Responsive>
    );
  }
}

export default navBar;
