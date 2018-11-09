import React from 'react';

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState((prevState) => {
      return { dropdownOpen: !prevState.dropdownOpen };
    });
  }

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
          <DropdownMenu>
            <DropdownItem >View Profile</DropdownItem>
            <DropdownItem >Signout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className="pa4 tc">
          <img src="http://tachyons.io/img/logo.jpg"
            className="br-100 ba h3 w3 dib" alt="avatar" />
        </div>
      </div>
    );
  }
}

export default ProfileIcon;