import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";

import Icon from "./Icon";
import CMD from "./CMD";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Interests from "./Interests";
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
            this.showInterestsDisplay = this.showInterestsDisplay.bind(this);
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

      showInterestsDisplay() {
            ReactDOM.render(<Interests />, document.getElementById("cmd"));
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
                              <motion.div
                                    id="desktop"
                                    initial={{ x: -1500 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: -500 }}
                                    transition={{
                                          delay: 0.25,
                                          type: "spring",
                                          stiffness: 20,
                                          velocity: 1,
                                    }}
                              >
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
                                    {/*
                                    <Icon
                                          type={notepad}
                                          name={"interests"}
                                          show={this.showInterestsDisplay}
                                    />
                                    */}
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


                              </motion.div>
                              <AnimatePresence>
                                    <motion.div
                                          id="cmd"
                                          initial={{ x: 1500 }}
                                          animate={{ x: 0 }}
                                          exit={{ y: 1500 }}
                                          transition={{
                                                delay: 0.15,
                                                type: "spring",
                                                stiffness: 20,
                                                velocity: 0.1,
                                          }}
                                    >
                                          {" "}
                                          <CMD />{" "}
                                    </motion.div>
                              </AnimatePresence>
                        </div>

                        <motion.div
                              id="taskbar"
                              initial={{ y: 1500 }}
                              animate={{ y: 0 }}
                              exit={{ y: -1500 }}
                              transition={{
                                    delay: 0.35,
                                    type: "spring",
                                    stiffness: 20,
                                    velocity: 0.1,
                              }}
                        ></motion.div>
                  </>
            );
      }
}

export default App;
