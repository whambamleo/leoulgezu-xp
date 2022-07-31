import React, { Component } from "react";
import "./CMD.css";

import me1 from "./imgs/me1.jpg";
import me2 from "./imgs/me2.JPG";
import me3 from "./imgs/me3.JPG";

class CMD extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <div class="CMD">
                              <div class="CMD-header">/home/leoul-gezu</div>

                              <div class="CMD-content">
                                    <div class="content1">
                                          <img src={me3} class="profileLeft" />
                                          <p class="CMD-ptext">
                                                Hey there! My name is Leoul
                                                Gezu. You can call me Leo. I am
                                                pursuing my B.S/M.S in Computer
                                                Science at Washington University
                                                in St. Louis. I'm aspiring to
                                                become a software engineer in a
                                                production environment,
                                                currently seeking internship
                                                opportunites for Summer 2023.
                                          </p>
                                    </div>

                                    <div class="content2">
                                          <p class="CMD-ptext">
                                                This site was inspired by my
                                                dad's Compaq desktop running
                                                Windows XP, the machine that
                                                made me fall in love with
                                                computers all those years ago.
                                                My resume is to your left for
                                                any quick reference. If you feel
                                                like learning more about me,
                                                please feel free to explore this
                                                site.
                                          </p>
                                          <img src={me1} class="profileRight" />
                                    </div>

                                    <div class="CMD-footer">
                                          <p class="CMD-ptext">
                                                You can reach me through any of
                                                the means at the top of my
                                                resume.
                                                Thanks for stopping by!
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </>
            );
      }
}

export default CMD;
