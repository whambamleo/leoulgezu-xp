import React, { Component } from "react";
import "./Skills.css";

import washu from "./imgs/washu.png";
import augie from "./imgs/augie.png";
import gibson from "./imgs/gibson.png";

class Education extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="Skills">
                              <div class="Skills-header">
                                    /home/leoul-gezu/skills{" "}
                              </div>

                              <div class="Education-content-container">
                                    <div class="Education-content1"></div>
                                    <div class="Education-content2"></div>
                                    <div class="Education-content3"></div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Education;
