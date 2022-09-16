import React, { Component } from "react";

import "./member-details.css";
import MWapiService from "../../services/mwapiService";

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

  updateMember = (newpageid) => {
    const pageid = newpageid;
    //console.log(pageid);
    if (!pageid){
      return;
    }
    this.mwapiService.getMember(pageid).then((wikiRespond) => {
      const strippedHTML = this.getStrippedHTML(wikiRespond);

      const personName = wikiRespond.title.split("/")[0];
      const ign = strippedHTML.match(new RegExp("IGN" + "\\s(\\w+)"))[1];
      //.split("IGN ").pop().split(" ")[0];
      //console.log(strippedHTML)
      const dateJoined =
        "" + strippedHTML.match(/\s\w*\s\d*\W\s\d{4}/gm)[0];
        //.split("Date joined ")
        //.pop()
        //.split("&")[0]
        //.split("Gender")[0]
        //.split("(")[0];
        const preGender = strippedHTML.substring(
          strippedHTML.indexOf("Gender") + 6,
          strippedHTML.lastIndexOf("Pronouns")
        );
        let gender;
        (preGender.length > 50)?(gender = "unidentified"):(gender=preGender);


      const partUrl = "https://static.wikia.nocookie.net/dream_team/images/";
      const normalSkin =
        partUrl + wikiRespond.text.split(partUrl)[1].split("/revision")[0];

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

  //constructor() { super(); }

  componentDidMount() {
    this.updateMember();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageid !== prevProps.pageid) {
      //console.log(this.props.pageid, prevProps.pageid);
      this.updateMember(this.props.pageid);
    }
  }

  render() {
    const { name, ign, dateJoined, gender, normalSkin, generalInfoP } =
      this.state;

    if (!name) {
      return (
        <div className="member-details">
          <div className="card-info list-group-item card-title">
            Select Dream SMP member from the list
          </div>
        </div>
      );
    }

    return (
      <div className="member-details">
        <div className="card">
          <img className="member-image" src={normalSkin} alt="skin" />

          <div className="card-info">
            <h4 className="card-title">{name}</h4>

            <ul className="list-group">
              <li className="list-group-item">
                <span className="term">IGN</span>
                <span className="info">{ign}</span>
              </li>

              <li className="list-group-item">
                <span className="term">Date joined</span>
                <span className="info">{dateJoined}</span>
              </li>

              <li className="list-group-item">
                <span className="term">Gender</span>
                <span className="info">{gender}</span>
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
