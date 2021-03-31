import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";



import {connect} from "react-redux"
import "./directory-style.scss";
import { selectDirectorySections } from "../../redux/collection/directory.selectors";

const Directory = ({sections}) => {
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }


const mapStateToProps = state => ({
sections : selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
