const mxl = require('../src/rss');
const news = require('../src/news');

// console.log(mxl());

// mxl().then(data => {
//     data.data[0].item.forEach(e => {
//         console.log(e.id[0]);
//         news.addNews(e.id[0])
//     })
// })

// news.addNews("111")

console.log(news.IsExist(2342558));