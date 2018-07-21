import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Responsive, Menu, Icon, Image, Sidebar, Segment,
} from 'semantic-ui-react';

export default class SideBar extends Component {
  // Keeps track of the visibility state of the mobile sidebar.
  state = { visible: false, dimmed: false };

  // Toggele the visibility from the SideBar when the menu button is clicked,
  // and dimm the content while sidebar is open.
  toggleVisibility = () => {
    const { visible, dimmed } = this.state;
    this.setState({ visible: !visible, dimmed: !dimmed });
  };

  // Hide sidebar when the page is clicked somewhere, and set dimmed to false
  handleSidebarHide = () => this.setState({ visible: false, dimmed: false });

  render() {
    const { visible, dimmed } = this.state;

    return (
      <div className="sidebar-wrapper">
        <Responsive
          as={Menu}
          maxWidth={767}
          className="hamburger-menu"
          size="large"
          secondary
          attached="top"
        >
          <Menu.Item onClick={this.toggleVisibility}>
            <Icon name="sidebar" />
            Menu
          </Menu.Item>
        </Responsive>
        <Responsive maxWidth={767} as={Image}>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              width="thin"
              animation="overlay"
              visible={visible}
              icon="labeled"
              vertical
              inverted
              color="teal"
              onHide={this.handleSidebarHide}
            >
              <Menu.Item as={Link} to="/" className="mobile-menu-btn" name="home">
                Home
              </Menu.Item>
              <Menu.Item name="contact" as={Link} to="/contact" />
              <Menu.Item name="signin" as={Link} to="/signin" />
              <Menu.Item name="signup" as={Link} to="/register" />

              <Menu.Item as={Link} to="#" onClick={this.toggleVisibility} className="close-btn">
                <Icon size="mini" name="close" />
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={dimmed}>
              <Segment className="pusher-wrapper" basic />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      </div>
    );
  }
}
