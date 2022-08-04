import React, { Component } from "react";
import "./WorkExperience.css";

import mastercard from "./imgs/mastercard.png";
import augie from "./imgs/augie.png";
import mastercardPortrait from "./imgs/mastercardPortrait.jpg";
import augiePortrait from "./imgs/augiePortrait.jpg";

class WorkExperience extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="WorkExperience">
                              <div class="WorkExperience-header">
                                    /home/leoul-gezu/work-experience{" "}
                              </div>

                              <div class="WorkExperience-content-container">
                                    <div class="WorkExperience-content1">
                                          <div>
                                                {" "}
                                                <img
                                                      src={mastercard}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div>
                                                <p class="WorkExperience-ptext">
                                                      Mastercard
                                                </p>
                                                <p class="WorkExperience-ptext">
                                                      Software Development
                                                      Engineering Intern
                                                </p>
                                                <p class="WorkExperience-ptext">
                                                      O'Fallon, MO
                                                </p>
                                          </div>
                                    </div>
                                    <br></br>
                                    <div class="WorkExperience-content1">
                                          <p class="WorkExperience-ptext">
                                                Summer of 2022, I interned at
                                                MasterCard's tech hub in
                                                O'Fallon, MO. I was a software
                                                development engineering intern
                                                in the Data Governance, Quality
                                                and Adhoc Anlaytics department.
                                                I was responsible for designing,
                                                developing and deploying new
                                                RESTful services that interacted
                                                with ETL architecture based on
                                                business needs shared by data
                                                science and warehouse teams and
                                                updating and managing existing
                                                API services and Swagger UIs
                                                <br></br>
                                                <br></br>I also led growing
                                                efforts to increase data privacy
                                                and security measures and
                                                prevent breaches by exporting
                                                data domains and tagging
                                                sensitive data and maintained
                                                over 90% unit test code coverage
                                                across projects and participated
                                                in code reviews in an Agile
                                                environment.
                                          </p>
                                          <img
                                                src={mastercardPortrait}
                                                class="photo"
                                          ></img>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="WorkExperience-content1">
                                          <div>
                                                {" "}
                                                <img
                                                      src={augie}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div>
                                                <p class="WorkExperience-ptext">
                                                      Augustana International
                                                      Admissions
                                                </p>
                                                <p class="WorkExperience-ptext">
                                                      Data Analysis Intern
                                                </p>
                                                <p class="WorkExperience-ptext">
                                                      Rock Island, IL
                                                </p>
                                          </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div class="WorkExperience-content1">
                                          <p class="WorkExperience-ptext">
                                                At the height of COVID during
                                                the fall of 2020, I landed my
                                                first internship as a data
                                                analyst for Augustana College's
                                                International Admissions
                                                department.
                                                <br></br>
                                                <br></br>
                                                This was about the time I had
                                                gotten really interested in
                                                computing and I decided to use
                                                that opportunity to use my
                                                Python, ML and data science
                                                knowledge to elevate the
                                                position from just analyzing
                                                data using Tableau to designing
                                                a data pipeline that could
                                                extract fresh insights and move
                                                the needle significantly in
                                                terms of new recruitment.
                                                <br></br>
                                                <br></br> I was especially
                                                passionate about this project,
                                                being an international student
                                                myself. I designed and
                                                implemented new data-driven
                                                recruitment strategies
                                                implementing statistical
                                                techniques and ML-aided data
                                                analysis. Our team increased
                                                international student enrollment
                                                by 35% that year.
                                                <br></br>
                                                <br></br>
                                          </p>
                                          <img
                                                src={augiePortrait}
                                                class="photo"
                                          ></img>
                                    </div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default WorkExperience;
