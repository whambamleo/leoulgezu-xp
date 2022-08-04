import React, { Component } from "react";
import Icon from "./Icon";
import "./Skills.css";

import washu from "./imgs/washu.png";
import augie from "./imgs/augie.png";
import gibson from "./imgs/gibson.png";

import java from "./imgs/java.png";
import python from "./imgs/python.png";
import javascript from "./imgs/javascript.png";
import arduino from "./imgs/arduino.png";
import php from "./imgs/php.png";
import cplus from "./imgs/cplus.png";

import react from "./imgs/react.png";
import node from "./imgs/node.png";
import spring from "./imgs/spring.png";
import maven from "./imgs/maven.png";
import sql from "./imgs/sql.png";
import mongo from "./imgs/mongo.png";
import swift from "./imgs/swift.png";

import scikit from "./imgs/scikit.png";
import numpy from "./imgs/numpy.png";
import pandas from "./imgs/pandas.png";
import matplotlib from "./imgs/matplotlib.png";
import matlab from "./imgs/matlab.png";

import confluence from "./imgs/confluence.png";
import agile from "./imgs/agile.png";
import aws from "./imgs/aws.png";
import git from "./imgs/git.png";
import swagger from "./imgs/swagger.png";
import postman from "./imgs/postman.webp";
import junit from "./imgs/junit.png";
import mockito from "./imgs/mockito.png";

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

                              <div class="Skills-content-container">
                                    <p className="content-title"> Languages </p>
                                    <div class="Skills-content1">
                                          <div>
                                                {" "}
                                                <p> Fluent </p>
                                                <div className="skills-fluent">
                                                      <div className="skill">
                                                            <img
                                                                  src={java}
                                                                  className="skillLogo"
                                                            />
                                                            <p> Java </p>
                                                      </div>
                                                      <div className="skill">
                                                            <img
                                                                  src={python}
                                                                  className="skillLogo"
                                                            />
                                                            <p> Python </p>
                                                      </div>
                                                      <div className="skill">
                                                            <img
                                                                  src={
                                                                        javascript
                                                                  }
                                                                  className="skillLogo"
                                                            />
                                                            <p> Javascript </p>
                                                      </div>
                                                      <div className="skill">
                                                            <img
                                                                  src={arduino}
                                                                  className="skillLogo"
                                                            />
                                                            <p> Arduino C </p>
                                                      </div>
                                                </div>
                                          </div>

                                          <div>
                                                <p> Familiar </p>
                                                <div className="skills-familiar">
                                                      <div className="skill">
                                                            <img
                                                                  src={php}
                                                                  className="skillLogo"
                                                            />
                                                            <p> PHP </p>
                                                      </div>
                                                      <div className="skill">
                                                            <img
                                                                  src={cplus}
                                                                  className="skillLogo"
                                                            />
                                                            <p> C++ </p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <p className="content-title"> Web/Mobile Development </p>
                                    <div class="Skills-content2">
                                          <div className="skill">
                                                <img
                                                      src={react}
                                                      className="skillLogo"
                                                />
                                                <p> React </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={node}
                                                      className="skillLogo"
                                                />
                                                <p> Node </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={spring}
                                                      className="skillLogo"
                                                />
                                                <p> Spring Boot </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={maven}
                                                      className="skillLogo"
                                                />
                                                <p> Maven </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={sql}
                                                      className="skillLogo"
                                                />
                                                <p> mySQL </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={mongo}
                                                      className="skillLogo"
                                                />
                                                <p> MongoDB </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={swift}
                                                      className="skillLogo"
                                                />
                                                <p> Swift </p>
                                          </div>
                                    </div>

                                    <p className="content-title"> ML/Data Science </p>
                                    <div class="Skills-content3">
                                          <div className="skill">
                                                <img
                                                      src={scikit}
                                                      className="skillLogo"
                                                />
                                                <p> Sci-kit Learn </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={numpy}
                                                      className="skillLogo"
                                                />
                                                <p> numPy </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={pandas}
                                                      className="skillLogo"
                                                />
                                                <p> Pandas </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={matplotlib}
                                                      className="skillLogo"
                                                />
                                                <p> Matplotlib </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={matlab}
                                                      className="skillLogo"
                                                />
                                                <p> Matlab </p>
                                          </div>
                                    </div>

                                    <p className="content-title"> Other </p>
                                    <div class="Skills-content4">
                                          <div className="skill">
                                                <img
                                                      src={agile}
                                                      className="skillLogo"
                                                />
                                                <p> Agile </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={confluence}
                                                      className="skillLogo"
                                                />
                                                <p> Confluence </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={git}
                                                      className="skillLogo"
                                                />
                                                <p> Version Control (Git) </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={swagger}
                                                      className="skillLogo"
                                                />
                                                <p> Swagger </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={postman}
                                                      className="skillLogo"
                                                />
                                                <p> Postman </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={aws}
                                                      className="skillLogo"
                                                />
                                                <p> AWS Suite </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={junit}
                                                      className="skillLogo"
                                                />
                                                <p> JUnit </p>
                                          </div>
                                          <div className="skill">
                                                <img
                                                      src={mockito}
                                                      className="skillLogo"
                                                />
                                                <p> Mockito </p>
                                          </div>
                                    </div>
                              </div>
                              <br></br>
                        </div>
                  </>
            );
      }
}

export default Education;
