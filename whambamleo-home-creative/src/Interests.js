import React, { Component } from "react";
import "./Interests.css";

import washu from "./imgs/washu.png";
import augie from "./imgs/augie.png";
import gibson from "./imgs/gibson.png";

class Interests extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="Interests">
                              <div class="Interests-header">
                                    /home/leoul-gezu/interests{" "}
                              </div>

                              <div class="Interests-content-container">
                                    <div class="Interests-content1">
                                          <p> Valorant </p>
                                    </div>

                              </div>
                        </div>
                  </>
            );
      }
}

export default Interests;
