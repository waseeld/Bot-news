const mxl = require('../src/rss');

// console.log(mxl());

mxl().then(data => console.log(data.data[0].item))