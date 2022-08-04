import React, { Component } from "react";

import "./Resume.css";

import resume from "./imgs/resume.pdf";

class Resume extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="Resume">
                              <div class="Resume-header">
                                    /home/leoul-gezu/resume
                              </div>

                              <div class="Resume-content-container">
                                    <iframe
                                          src={resume}
                                          class="ResumeIframe"
                                    ></iframe>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Resume;
