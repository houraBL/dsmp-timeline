const { default: axios } = require("axios");

function fetchWikiExtract(param) {
    const wikiEndpoint = 'https://dreamteam.fandom.com/api.php';
    const wikiParams = '?action=parse'
    + '&prop=wikitext'
    //+ '&exsentences=2'
    //+ '&exlimit=1'
    + '&pageid=' + param
    //+ '&explaintext=1'
    + '&redirects=true'
    + '&format=json'
    + '&formatversion=2'
    + '&origin=*';
;
    const wikiLink = wikiEndpoint + wikiParams;
    console.log(wikiLink);

    var wikiConfig = {
        timeout: 6500
    };

    async function getJsonResponse(url, config){
        const res = await axios.get(url, config);
        return res.data;
    };

    return getJsonResponse(wikiLink, wikiConfig).then(result => {
        return result;
    }).catch(error => {
        console.log('an error has occured: ' + error);
        return null;
    })
}

const apiHelper = require('./services/apiHelper.js');

console.log('Dream SMP Timeline');

async function getWikiData() {
    const wikiData = await apiHelper.fetchWikiExtract('1063');
    var strippedHtml = wikiData.parse.wikitext.replace(/<[^>]+>/g, '');
    console.log(strippedHtml);
}

module.exports = { fetchWikiExtract }
