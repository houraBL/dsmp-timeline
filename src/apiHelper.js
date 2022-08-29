const { default: axios } = require("axios");

function fetchWikiExtract(param) {
    const wikiEndpoint = 'https://dreamteam.fandom.com/api.php';
    const wikiParams = '?action=parse'
    + '&prop=text'
    //+ '&exsentences=2'
    //+ '&exlimit=1'
    + '&page=' + param
    //+ '&explaintext=1'
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

module.exports = { fetchWikiExtract }
