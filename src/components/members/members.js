import React, { Component } from "react";

import "./members.css";

export default class Members extends Component {
  // haven't found in documentation how to get to the subpage
  // (dreamteam.fandom.com/wiki/tommyinnit/smp - charafter page,
  // dreamteam.fandom.com/wiki/tommyinnit - real person page),
  // and using this array to navigate instead

  state = {
    members: [
      { name: "Aimsey", pageid: 10627 },
      { name: "Antfrost", pageid: 1095 },
      { name: "Awesamdude", pageid: 1059 },
      { name: "BadBoyHalo", pageid: 1062 },
      { name: "BlondeQuackity", pageid: 10981 },
      //{ name: "Boo", pageid: 10098 },
      { name: "BoomerNA", pageid: 9930 },
      { name: "Callahan ", pageid: 1057 },
      { name: "CaptainPuffy", pageid: 2122 },
      { name: "ConnorEatsPants", pageid: 2114 },
      { name: "Dream", pageid: 1037 },
      //{ name: "DreamXD", pageid: 4279 },
      //{ name: "Drista", pageid: 1130 },
      { name: "Eret", pageid: 1084 },
      { name: "Eryn", pageid: 9873 },
      { name: "Foolish Gamers", pageid: 4224 },
      { name: "Fundy", pageid: 1036 },
      { name: "GeorgeNotFound", pageid: 1048 },
      //{ name: "Ghostbur", pageid: 2202 },
      //{ name: "Ground Goblin", pageid: 10787 },
      { name: "Hannahxxrose", pageid: 4297 },
      { name: "HBomb94", pageid: 1092 },
      { name: "ItsAlyssa", pageid: 1060 },
      { name: "JackManifoldTV", pageid: 1085 },
      { name: "Jschlatt", pageid: 1069 },
      { name: "Karl Jacobs", pageid: 1090 },
      { name: "LazarBeam", pageid: 2245 },
      //{ name: "Mexican Dream", pageid: 2928 },
      //{ name: "MICHAEL", pageid: 6306 },
      { name: "Michaelmcchill", pageid: 7919 },
      { name: "Nihachu", pageid: 1087 },
      //{ name: "NotDream123", pageid: 8934 },
      { name: "Ph1LzA", pageid: 2107 },
      { name: "Ponk", pageid: 1061 },
      { name: "Punz", pageid: 1066 },
      { name: "Purpled", pageid: 1067 },
      { name: "Quackity", pageid: 1089 },
      { name: "Ranboo", pageid: 2343 },
      { name: "Sam Bucket", pageid: 10698 },
      { name: "Sam Nook", pageid: 4767 },
      //{ name: "Samsung Smart Refrigerator", pageid: 2414 },
      { name: "Sapnap", pageid: 1056 },
      { name: "Seapeekay", pageid: 10621 },
      { name: "Skeppy", pageid: 1083 },
      { name: "Slimecicle", pageid: 4427 },
      { name: "Technoblade" + String.fromCodePoint(0x1f451), pageid: 1065 },
      //{ name: "The Overseers", pageid: 10577 },
      { name: "TinaKitten", pageid: 9887 },
      { name: "TommyInnit", pageid: 1063 },
      { name: "Tubbo", pageid: 1064 },
      //{ name: "Vikkstar123", pageid: 2241 },
      { name: "Wilbur Soot", pageid: 1068 },
    ],
  };

  renderItems(arr) {
    return arr.map(({ name, pageid }) => {
      return (
        <li
          className="list-group-item"
          key={pageid}
          onClick={() => this.props.onMemberSelected(pageid)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { members } = this.state;

    const items = this.renderItems(members);
    return (
      <div className=" members">
        <ul className=" item-list list-group">
          <h3>Active members</h3>
          {items}
        </ul>
      </div>
    );
  }
}
