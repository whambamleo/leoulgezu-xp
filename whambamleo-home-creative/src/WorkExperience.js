import React, { Component } from "react";
import "./Education.css";

import mastercard from "./imgs/mastercard.png";

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
                                    <div>
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
                                                <br></br>
                                                I also led
                                                growing efforts to increase data
                                                privacy and security measures
                                                and prevent breaches by
                                                exporting data domains and
                                                tagging sensitive data and
                                                maintained over 90% unit test
                                                code coverage across projects
                                                and participated in code reviews
                                                in an Agile environment.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default WorkExperience;
