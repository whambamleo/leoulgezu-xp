import React, { Component } from "react";
import "./Projects.css";

import olinCounts from "./imgs/olinCounts.png";
import forexDash from "./imgs/forexDash.png";
import underConstruction from "./imgs/underConstruction.jpg";

class Projects extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="Projects">
                              <div class="Projects-header">
                                    /home/leoul-gezu/projects{" "}
                              </div>

                              <div class="Projects-content-container">
                                    <p className="content-title-projects">
                                          {" "}
                                          olinCounts{" "}
                                    </p>
                                    <div class="Projects-content">
                                          <div className="content-description">
                                                Designed and pitched a modern
                                                approach to head counts and
                                                space management for Library
                                                Management at WashU
                                                <br></br>
                                                <br></br>
                                                Applied modern UI/UX principles
                                                for a clean user experience and
                                                connected APIs for automated
                                                spreadsheet generation and count
                                                management
                                          </div>
                                          <div className="content-image-container">
                                                <img
                                                      src={olinCounts}
                                                      className="content-image"
                                                />
                                          </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <img src={underConstruction} className="underConstruction" />


                              </div>

                              
                        </div>
                  </>
            );
      }
}

export default Projects;
