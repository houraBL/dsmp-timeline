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
