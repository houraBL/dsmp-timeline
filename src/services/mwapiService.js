const { default: axios } = require("axios");

export default class MWapiService {
  _apiBase = "https://dreamteam.fandom.com/api.php";

  async getResource(url) {
    const res = await axios.get(`${this._apiBase}${url}`, { timeout: 6500 });
    console.log(`${this._apiBase}${url}`);
    if (!res.status === 200) {
      throw new Error(`Could not parse ${url} received ${res.status}`);
    }
    return await res.data.parse;
  }

  getWikiParams() {
    return (
      "?action=parse" +
      "&prop=text" +
      "&format=json" +
      "&formatversion=2" +
      "&origin=*"
    );
  }

  getTimeline() {
    const timelinePageName = "Timeline_of_the_Dream_SMP";
    const wikiParams = this.getWikiParams() + "&page=" + timelinePageName;

    return this.getResource(wikiParams);
  }

  getServerInfo() {
    const timelinePageName = "Dream_SMP";
    const wikiParams = this.getWikiParams() + "&page=" + timelinePageName;

    return this.getResource(wikiParams);
  }

  getMember(pageid) {
    const wikiParams = this.getWikiParams() + "&pageid=" + pageid + "&origin=*";
    return this.getResource(wikiParams);
  }
}

//const mwapi = new MWapiService();
//mwapi.getTimeline().then((body) => {  console.log(body);});

//mwapi.getPerson().then((body) => {console.log(body.text);});


/*
class MWapiService {
  _apiBase = "https://dreamteam.fandom.com/api.php";

  async getResource(url) {
    const res = await axios.get(`${this._apiBase}${url}`, { timeout: 6500 });

    if (!res.ok) {
      throw new Error(`Could not parse ${url} received ${res.status}`);
    }
    return await res.json();
  }

  getWikiParams() {
    return (
      "?action=parse" +
      "&prop=wikitext" +
      "&redirects=true" +
      "&format=json" +
      "&formatversion=2" +
      "&origin=*"
    );
  }

  getTimeline() {
    const timelinePageName = "Timeline_of_the_Dream_SMP";
    const wikiParams = this.getWikiParams() + "&page=" + timelinePageName;
    return this.getResource(wikiParams);
  }

  getPerson(pageid) {
    const wikiParams = this.getWikiParams() + "&pageid=" + pageid;
    return this.getResource(wikiParams);
  }

}

function fetchWikiExtract(param) {
  const wikiEndpoint = "https://dreamteam.fandom.com/api.php";
  const wikiParams =
    "?action=parse" +
    "&prop=wikitext" +
    "&pageid=" +
    param + // of pagename
    "&redirects=true" +
    "&format=json" +
    "&formatversion=2" +
    "&origin=*";

  const wikiLink = wikiEndpoint + wikiParams;
  console.log(wikiLink);

  var wikiConfig = {
    timeout: 6500,
  };

  async function getJsonResponse(url, config) {
    const res = await axios.get(url, config);
    return res.data;
  }

  return getJsonResponse(wikiLink, wikiConfig)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("an error has occured: " + error);
      return null;
    });
}

const apiHelper = require("./services/apiHelper.js");

console.log("Dream SMP Timeline");

async function getWikiData() {
  const wikiData = await apiHelper.fetchWikiExtract("1063");
  var strippedHtml = wikiData.parse.wikitext.replace(/<[^>]+>/g, "");
  console.log(strippedHtml);
}

const fetchResult = async (param) => {
  const wikiEndpoint = "https://dreamteam.fandom.com/api.php";
  const wikiParams =
    "?action=parse" +
    "&prop=wikitext" +
    "&pageid=" +
    param + // of pagename
    "&redirects=true" +
    "&format=json" +
    "&formatversion=2" +
    "&origin=*";

  const url = wikiEndpoint + wikiParams;
  var wikiConfig = {
    timeout: 6500,
  };

  async function getJsonResponse(url, config) {
    const res = await axios.get(url, config);
    return res.data;
  }

  return getJsonResponse(url, wikiConfig)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("an error has occurred: " + error);
      return null;
    });
};
//export function fetchWikiExtract;
//module.exports = { fetchWikiExtract, fetchResult };




// #region
const fetchResult6 = async (param) => {
  const wikiEndpoint = "https://dreamteam.fandom.com/api.php";
  const wikiParams =
    "?action=parse" +
    "&prop=wikitext" +
    "&page=" +
    param + // of pagename
    "&redirects=true" +
    "&format=json" +
    "&formatversion=2" +
    "&origin=*";

  const url = wikiEndpoint + wikiParams;
  var wikiConfig = {
    timeout: 6500,
  };

  async function getJsonResponse(url, config) {
    const res = await axios.get(url);
    return res.data;
  }
  console.log(url);

  return getJsonResponse(url, wikiConfig)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("an error has occurred: " + error);
      return null;
    });
};

function main () {
    console.log("Dream SMP Timeline");

    async function getWikiData() {
      const wikiData = await fetchResult("Timeline_of_the_Dream_SMP");
      var strippedHtml = wikiData.parse.wikitext.replace(/<[^>]+>/g, "");
      console.log(strippedHtml);
      return strippedHtml;
    }

    getWikiData();
}

main();
// #endregion
*/
