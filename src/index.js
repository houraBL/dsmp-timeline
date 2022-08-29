const apiHelper = require('./apiHelper.js');

console.log('Dream SMP Timeline');

async function main() {
    const wikiData = await apiHelper.fetchWikiExtract('Timeline_of_the_Dream_SMP');
    var strippedHtml = wikiData.parse.text.replace(/<[^>]+>/g, '');
    console.log(strippedHtml);
}

main();
