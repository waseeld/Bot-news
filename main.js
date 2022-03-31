var cron = require('node-cron');
require('dotenv').config()
const { Bot } = require("grammy")
const bot = new Bot(process.env.Bot_token)

const rss = require('./src/rss');
const news = require('./src/news');

cron.schedule('* * * * *', () => {
    console.log("Start Checking at " + new Date());
    rss().then(data => {
        // console.log(JSON.stringify(data, null, 4));
        let items = data.data[0].item
        items.forEach(e => {
            let id = e.id[0]
            let title = e.title[0]
            let link = e.link[0]
            if(!news.IsExist(id)){
                bot.api.sendMessage('-1001307080127', title + "\n" + link).then(()=> {
                    news.addNews(id)
                    console.log("Post one : " + id);
                })
            }
        });
    })
   
});

