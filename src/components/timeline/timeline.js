import React, {Component} from 'react';

import './timeline.css';

/*
const apiHelper = require('../apiHelper.js');

console.log('Dream SMP Timeline');

async function getWikiData() {
    const wikiData = await apiHelper.fetchWikiExtract('1063');
    var strippedHtml = wikiData.parse.wikitext.replace(/<[^>]+>/g, '');
    return strippedHtml;
}

*/


export default class Timeline extends Component {

    render () {
        //const timelineInfo = getWikiData();
        return (
            <div className='timeline'>
                <h3><a href="#">DreamSMP Members</a></h3>
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
