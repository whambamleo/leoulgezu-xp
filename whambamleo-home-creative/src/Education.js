import React, { Component } from "react";
import "./Education.css";

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
                        <div class="Education">
                              <div class="Education-header">
                                    /home/leoul-gezu/education{" "}
                              </div>

                              <div class="Education-content-container">
                                    <div class="Education-content1">
                                          <div>
                                                {" "}
                                                <img
                                                      src={washu}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div>
                                                <p class="Education-ptext">
                                                      Washington University in
                                                      St. Louis
                                                </p>
                                                <p class="Education-ptext">
                                                      B.S/M.S Candidate in
                                                      Computer Science
                                                </p>
                                          </div>
                                    </div>
                                    <div>
                                          <p class="Education-ptext">
                                                I'm currently attending
                                                Washington University in St.
                                                Louis through the{" "}
                                                <a
                                                      href="https://engineering.wustl.edu/academics/dual-degree-program/index.html"
                                                      class="link"
                                                >
                                                      {" "}
                                                      dual degree program
                                                </a>{" "}
                                                pursuing my B.S in Computer
                                                Science. I am currently a junior
                                                and I'll be graduating in May
                                                2024.
                                          </p>
                                          <p class="Education-ptext">
                                                During my time at WashU, I have
                                                been working digilently to
                                                expand my SWE skillset. So far,
                                                I have tried to lay a strong
                                                (and diverse) foundation by
                                                taking classes like data
                                                structures and algorithms, data
                                                science, systems softwares,
                                                parallel and concurrent
                                                programming, object-oriented
                                                programming, web development,
                                                rapid prototyping,
                                                microcontroller programming and
                                                mobile application development.
                                          </p>
                                          <p class="Education-ptext">
                                                <a href="https://drive.google.com/file/d/1PeknWVlkW0YbmR40Eam22On7Lt_KgCtM/view?usp=sharing" class="link"> Unofficial Transcript </a>
                                          </p>
                                    </div>

                                    <div class="Education-content2">
                                          <div>
                                                {" "}
                                                <img
                                                      src={augie}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div>
                                                <p class="Education-ptext">
                                                      Augustana College
                                                </p>
                                                <p class="Education-ptext">
                                                      B.A in Engineering Physics
                                                </p>
                                          </div>
                                    </div>
                                    <div>
                                          <p class="Education-ptext">
                                                From 2018-2021, I attended
                                                Augustana College in Rock
                                                Island, IL. I came in as a
                                                physics major and gradually
                                                switched to engineering physics
                                                as I found myself more and more
                                                enamoured by application over
                                                theory. I took my first ever
                                                computer science classes at
                                                Augustana College, where I fell
                                                in love with coding. That led to
                                                the dual degree program and my
                                                enrollment at WashU to pursue
                                                Computer Science/Engineering
                                                full-time. That being said,
                                                there's still a part of me that
                                                loves physics and I'll still be
                                                receiving my engineering physics
                                                degree from Augustana in 2023.
                                          </p>
                                    </div>
                                    <div class="Education-content3">
                                          <div>
                                                {" "}
                                                <img
                                                      src={gibson}
                                                      class="logo"
                                                ></img>
                                          </div>
                                          <div>
                                                <p class="Education-ptext">
                                                      Gibson School Systems
                                                </p>
                                                <p class="Education-ptext">
                                                      High School Diploma
                                                </p>
                                          </div>
                                    </div>
                                    <div>
                                          <p class="Education-ptext">
                                                Before coming to the US for
                                                college, I grew up and went to
                                                school in Ethiopia. Although
                                                there isn't much to say about
                                                this time period that would add
                                                to my software engineering
                                                repertoire, my international
                                                experiences are vital in
                                                understanding what I bring to a
                                                team in terms of open-mindedness
                                                and cultural awareness.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default Education;
