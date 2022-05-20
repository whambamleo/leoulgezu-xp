import React, { Component } from "react";
import ReactDOM from "react-dom";


import "./App.css";

import Icon from "./Icon";
import CMD from "./CMD";
import Education from "./Education";
import Photo from "./Photo";

import notepad from "./imgs/notepad.png";
import word from "./imgs/word.svg";
import folder from "./imgs/folder.png";
import xpLogo from "./imgs/xpLogo.png";

class App extends Component {
      constructor(props) {
            super(props);
            this.showEducationDisplay = this.showEducationDisplay.bind(this);
      };

      showEducationDisplay() {
            document.getElementById("cmd").innerHTML = "";
            document.getElementById("cmd").insertAdjacentHTML("beforeend",`<p> test </p>`)
      }

     

      render() {
            return (
                  <>
                  <div id="desktopFlex">
                        <div id="desktop">
                              <Icon type={notepad} name={"education"} show={this.showEducationDisplay} />
                              <Icon type={notepad} name={"work experience"} />
                              <Icon type={notepad} name={"leadership"} />
                              <Icon type={notepad} name={"skills"} />
                              <Icon type={folder} name={"projects"} />
                              <Icon type={word} name={"resume"} />
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
