import React from "react";
import Members from "../members";
import MemberDetails from "../member-details";

import "./members-page.css";

const MembersPage = (props) => {

  return (
    <div className="members-page row">
      <div className="column member-list">
        <Members
          className="column member-list"
          onMemberSelected={props.onMemberSelected}
          pageid={props.pageid}
        />
      </div>
      <div className="column member-info">
        <MemberDetails pageid={props.pageid} />
      </div>
    </div>
  );
};

export default MembersPage;

/*
<div className="row mb2">
      <div className="col-md-6">
        <Members onItemSelected={(id) => history.push(id)} />
      </div>
      <div className="col-md-6">
        <MemberDetails itemId={id} />
      </div>
    </div>
*/
