import React, { Component } from "react";
import "../../Components/App.css";

import { Menu, Segment } from "semantic-ui-react";

const colors = ["teal"];

class navBar extends Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { color } = this.props;
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu color={color} inverted pointing secondary>
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>

          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          >
            Contact
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
            >
              Sign Up
            </Menu.Item>

            <Menu.Item
              name="Register"
              active={activeItem === "Register"}
              onClick={this.handleItemClick}
            >
              Register
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

export default navBar;
