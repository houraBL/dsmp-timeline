import React, { Component } from "react";

import "./member-details.css";
import MWapiService from "../../services/mwapiService";
import { wait } from "@testing-library/user-event/dist/utils";

export default class MemberDetails extends Component {
  mwapiService = new MWapiService();

  state = {
    name: null,
    ign: null,
    dateJoined: null,
    gender: null,
    normalSkin: null,
    generalInfoP: [],
  };

  getStrippedHTML(wikiRespond) {
    var strippedHtml = wikiRespond.text
      .replace(/<[^>]+>/g, "")
      .replace(/(\r\n|\r|\n){2}/g, "$1")
      .replace(/(\r\n|\r|\n){3,}/g, "$1\n")
      .replace(/\s\s+/g, " ");
    return strippedHtml;
  }

  updateMember = (pageid) => {
    this.mwapiService.getMember(pageid).then((wikiRespond) => {
      const strippedHTML = this.getStrippedHTML(wikiRespond);

      const personName = wikiRespond.title.split("/")[0];
      const ign = strippedHTML.split("IGN ").pop().split(" ")[0];
      const dateJoined = strippedHTML.split("Date joined ").pop().split("&")[0];
      const gender = strippedHTML.split("Gender ").pop().split("Pronouns")[0];

      const partUrl = "https://static.wikia.nocookie.net/dream_team/images/";
      const normalSkin =
        partUrl + wikiRespond.text.split(partUrl)[1].split("/revision")[0];

      console.log(normalSkin);
      const generalInfo = wikiRespond.text
        .split('<div style="display:none">')[1]
        .split('<div id="toc" class="toc"')[0]
        .split("</blockquote>")[1]
        .replace(/<[^>]+>/g, "");
      const generalInfoP = generalInfo.split("\n").filter(function (n) {
        return n;
      });

      this.setState({
        name: personName,
        ign: ign,
        dateJoined: dateJoined,
        gender: gender,
        normalSkin: normalSkin,
        generalInfoP: generalInfoP,
      });
    });
  };

  trailing(str, pattern) {
    const re = new RegExp(`${pattern}(.*)$`);
    if (re.test(str)) return RegExp.$1.toString();
    return "";
  }

  //constructor() { super(); }

  componentDidMount() {
    this.updateMember(1063);
  }

  componentWillUnmount() {}

  componentDidUpdate() {}

  componentDidCatch() {}

  render() {
    const { name, ign, dateJoined, gender, normalSkin, generalInfoP } =
      this.state;
    return (
      <div className="member-details">
        <div className="card">
          <img className="member-image" src={normalSkin} alt="" />

          <div className="card-info">
            <h4 className="card-title">{name}</h4>

            <ul className="list-group">
              <li className="list-group-item">
                <span className="term">IGN</span>
                <span>{ign}</span>
              </li>

              <li className="list-group-item">
                <span className="term">Date joined</span>
                <span>{dateJoined}</span>
              </li>

              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>{gender}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="person-story">
          {generalInfoP.map((item, index) => (
            <p key={"p" + index}>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}
