import React, { Component } from "react";
import Timeline from "../timeline";

const TimelinePage = ({ history, match }) => {
  //const { id } = match.params;

  return (
    <div className="members-page row">

        <Timeline />
    </div>
  );
};

export default TimelinePage
class TimelinePagwe extends Component {

    render () {
        //const timelineInfo = getWikiData();
        return (
            <div className='timeline'>
                <h3><a href="#">DreamSMP Timeline</a></h3>
                <ul >
                        <li>
                            <a href="#">20.02.2020 Creation of the server</a>
                        </li>
                        <li>
                            <a href="#">30.04.2020 Tommyinnit is added to the server</a>
                        </li>
                        <li>
                            <a href="#">01.07.2022 Technoblade passing announcement</a>
                        </li>
                </ul>


            </div>
        );
    }
};
