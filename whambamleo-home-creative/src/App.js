import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";

import Icon from "./Icon";
import CMD from "./CMD";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Leadership from "./Leadership";
import Projects from "./Projects";
import Resume from "./Resume";

import notepad from "./imgs/notepad.png";
import word from "./imgs/word.svg";
import folder from "./imgs/folder.png";
import xpLogo from "./imgs/xpLogo.png";

class App extends Component {
      constructor(props) {
            super(props);
            this.showEducationDisplay = this.showEducationDisplay.bind(this);
            this.showWorkExperienceDisplay =
                  this.showWorkExperienceDisplay.bind(this);
            this.showLeadershipDisplay = this.showLeadershipDisplay.bind(this);
            this.showSkillsDisplay = this.showSkillsDisplay.bind(this);
            this.showProjectsDisplay = this.showProjectsDisplay.bind(this);
            this.showResumeDisplay = this.showResumeDisplay.bind(this);
      }

      showEducationDisplay() {
            ReactDOM.render(<Education />, document.getElementById("cmd"));
      }

      showWorkExperienceDisplay() {
            ReactDOM.render(<WorkExperience />, document.getElementById("cmd"));
      }

      showLeadershipDisplay() {
            ReactDOM.render(<Leadership />, document.getElementById("cmd"));
      }

      showSkillsDisplay() {
            ReactDOM.render(<Skills />, document.getElementById("cmd"));
      }

      showProjectsDisplay() {
            ReactDOM.render(<Projects />, document.getElementById("cmd"));
      }

      showResumeDisplay() {
            ReactDOM.render(<Resume />, document.getElementById("cmd"));
      }

      render() {
            return (
                  <>
                        <div id="desktopFlex">
                              <div id="desktop">
                                    <Icon
                                          type={notepad}
                                          name={"education"}
                                          show={this.showEducationDisplay}
                                    />
                                    <Icon
                                          type={notepad}
                                          name={"work experience"}
                                          show={this.showWorkExperienceDisplay}
                                    />
                                    <Icon
                                          type={notepad}
                                          name={"leadership"}
                                          show={this.showLeadershipDisplay}
                                    />
                                    <Icon
                                          type={notepad}
                                          name={"skills"}
                                          show={this.showSkillsDisplay}
                                    />
                                    <Icon
                                          type={folder}
                                          name={"projects"}
                                          show={this.showProjectsDisplay}
                                    />
                                    <Icon
                                          type={word}
                                          name={"resume"}
                                          show={this.showResumeDisplay}
                                    />
                              </div>
                              <div id="cmd">
                                    {" "}
                                    <CMD />{" "}
                              </div>
                        </div>

                        <div id="taskbar"></div>
                  </>
            );
      }
}

export default App;
