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
      { name: "Boo", pageid: 10098 },
      { name: "BoomerNA", pageid: 9930 },
      { name: "Callahan ", pageid: 1057 },
      { name: "CaptainPuffy", pageid: 2122 },
      { name: "ConnorEatsPants", pageid: 2114 },
      { name: "Dream", pageid: 1037 },
      { name: "DreamXD", pageid: 4279 },
      { name: "Drista", pageid: 1130 },
      { name: "Eret", pageid: 1084 },
      { name: "Eryn", pageid: 9873 },
      { name: "Foolish Gamers", pageid: 4224 },
      { name: "Fundy", pageid: 1036 },
      { name: "GeorgeNotFound", pageid: 1048 },
      { name: "Ghostbur", pageid: 2202 },
    ],
  };

  renderItems(arr) {
    return arr.map(({ name, pageid }) => {
      return (
        <li
          className="list-group-item"
          key={pageid}
          onClick={() => this.props.onItemSelected(pageid)}
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
      <div className="members">
        <ul className="item-list list-group">
          <h3>Active members</h3>
          {items}
        </ul>
      </div>
    );
  }
}
