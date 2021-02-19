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
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} img={imageUrl} size={size} />
        ))}
        {console.log(this.state.sections)}
      </div>
    );
  }
}

export default Directory;
