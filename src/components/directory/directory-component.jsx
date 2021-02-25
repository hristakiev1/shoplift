import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import { Sections } from "../../directory-data";
import "./directory-style.scss";

class Directory extends Component {
  state = {
    sections: [],
  };

  componentDidMount() {
    this.setState({ sections: Sections() });
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Directory;
