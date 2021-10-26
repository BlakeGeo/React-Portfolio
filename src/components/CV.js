import React from "react";
import CV from "./images/0. CV.pdf"

export default function Resume() {
    return (
        <div>
        <h2 className="title1">Resume</h2>
            <ul className="resumeHolder">
                <li className="fa fa-file-pdf-o" id="pdf"> <a href={CV}
                download target="blank">Blake</a></li>
            </ul>
      </div>
    );
  }