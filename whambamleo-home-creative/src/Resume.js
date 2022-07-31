import React, { Component } from "react";
import "./Resume.css";

import washu from "./imgs/washu.png";
import augie from "./imgs/augie.png";
import mastercard from "./imgs/mastercard.png";

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
                                    <div class="Resume-section-title">
                                          EDUCATION
                                    </div>

                                    <div class="Resume-content">
                                          <div>
                                                <img
                                                      src={washu}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div class="Resume-content-education">
                                                <div class="borderLeft">
                                                      <p class="Resume-ptext">
                                                            <b>
                                                                  Washington
                                                                  University in
                                                                  St. Louis
                                                            </b>
                                                            <br></br>{" "}
                                                            <b>
                                                                  B.S/M.S
                                                                  Candidate in
                                                                  Computer
                                                                  Science| GPA:
                                                                  3.97
                                                            </b>
                                                      </p>

                                                      <p class="Resume-ptext">
                                                            Relevant Coursework:
                                                            OOP, DS&A,
                                                            Algorithmic
                                                            Analysis, Parallel &
                                                            Concurrent
                                                            Programming, Systems
                                                            Software,
                                                            Prob/Stats, Data
                                                            Science, Technical
                                                            Writing
                                                            <br></br>
                                                            <br></br>
                                                            Activities: National
                                                            Society of Black
                                                            Engineers (NSBE),
                                                            Library Operations
                                                            Student Assistant
                                                      </p>
                                                </div>
                                                <div class="borderRight">
                                                      <p class="Resume-ptext-right">
                                                            {" "}
                                                            August 2021 - May
                                                            2024{" "}
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <hr class="divider"></hr>

                                    <div class="Resume-content">
                                          <div>
                                                <img
                                                      src={augie}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div class="Resume-content-education">
                                                <div class="borderLeft">
                                                      <p class="Resume-ptext">
                                                            <b>
                                                                  Augustana
                                                                  College
                                                            </b>
                                                            <br></br>
                                                            <b>
                                                                  {" "}
                                                                  B.A in
                                                                  Engineering
                                                                  Physics | GPA:
                                                                  3.75{" "}
                                                            </b>
                                                      </p>

                                                      <p class="Resume-ptext"></p>

                                                      <p class="Resume-ptext">
                                                            Relevant Coursework:
                                                            Quantum Mechanics,
                                                            Differential
                                                            Equations, Advanced
                                                            Physics Laboratory
                                                            I/II, Engineering
                                                            Design (CAD), Honors
                                                            Writing
                                                            <br></br>
                                                            <br></br>
                                                            Activities:
                                                      </p>
                                                </div>
                                                <div class="borderRight">
                                                      <p class="Resume-ptext-right">
                                                            {" "}
                                                            August 2018 - May
                                                            2023{" "}
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <div class="Resume-section-title">
                                          WORK EXPERIENCE
                                    </div>

                                    <div class="Resume-content">
                                          <div>
                                                <img
                                                      src={mastercard}
                                                      class="logo"
                                                ></img>
                                          </div>

                                          <div class="Resume-content-education">
                                                <div class="borderLeft">
                                                      <p class="Resume-ptext">
                                                            <b>MasterCard</b>
                                                            <br></br>
                                                            <b>
                                                                  Software
                                                                  Development
                                                                  Engineering
                                                                  Intern
                                                            </b>
                                                      </p>
                                                      <p class="Resume-ptext">
                                                            <ul>
                                                                  <li> Configured, managed and added to existing API services and Swagger UIs in an Agile environment </li>
                                                                  <li> Performed Agile testing: unit tests, ___ , ___ </li>
                                                            </ul>
                                                      </p>
                                                </div>
                                                <div class="borderRight">
                                                      <p class="Resume-ptext-right">
                                                            {" "}
                                                            June 2022 - August
                                                            2022{" "}
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <div class="Resume-section-title">
                                          SKILLS
                                    </div>

                                    <div class="Resume-content"></div>

                                    <div class="Resume-section-title">
                                          PROJECTS
                                    </div>
                                    
                                    <div class="Resume-content"></div>

                                    <div class="Resume-section-title">
                                          LEADERSHIP
                                    </div>

                                    <div class="Resume-content"></div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Resume;
