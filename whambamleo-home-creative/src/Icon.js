import React, { Component } from "react";
import "./Icon.css";

import notepad from "./imgs/notepad.png";
import word from "./imgs/word.svg";
import folder from "./imgs/folder.png";


class Icon extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="icon" onDoubleClick={this.props.show}>
                        <img src={this.props.type} class="iconImage" />
                              <p> {this.props.name} </p>
                              
                        </div>
                  </>
            );
      }
}

export default Icon;
