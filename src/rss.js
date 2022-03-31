// https://www.spa.gov.sa/rss.xml
const request = require('request');
const xml2js = require('xml2js');
const rq = require('request-promise');

const main = async () => {
    const RSSurl = "https://www.spa.gov.sa/rss.xml"
    var body;
    await rq(RSSurl, { "rejectUnauthorized": false }).then(data => body = data)

    await xml2js.parseString(body, {mergeAttrs: true }, (err, result) => {
        if (err) {
            throw err;
        }
        body = result
    });
    return { status: 200, data: body.rss.channel }
}
module.exports = main