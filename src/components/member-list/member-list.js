import React from 'react';

import './member-list.css';

const MemberList = () => {
  return (
    <div className="member-list">
        <h3>
            <a href="#">
                Active DreamSMP members
            </a>
        </h3>
        <ul className="">
            <li>
                <a href="#">Member1</a>
            </li>
            <li>
                <a href="#">Member2</a>
            </li>
        </ul>
    </div>
  );
};


export default MemberList;
