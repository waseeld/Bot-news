
function v_user(id_num, ids) {
    var result = ids
    var arrFound
    for (let index = 0; index < result.length; index++) {
        if (id_num != result[index]) {
            arrFound = true
            break
        } else {
            arrFound = false
        }

    }
    console.log(arrFound);
    return arrFound
}
////////
// var TelegramBot = require('node-telegram-bot-api')
const Telegraf = require('telegraf')
var request = require("request");
var cron = require('node-cron');
const token = "1088926767:AAFWTZkLI-hz5lZV-eRHNmzt10OiFaTxub0"
/////////
var data
var options = {
    method: 'GET',
    json: true,
    url: 'http://wajp.esy.es/podcast/read.php',
};
const bot = new Telegraf(token)

cron.schedule('* * * * *', () => {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        data = body
        console.log(data);
        var ids = [
            "2082361",
            "2082359",
            "2082358",
            "2082355",
            "2082354",
            "2082353",
            "2082352",
            "2082351",
            "2082350",
            "2082349",
            "2082345",
            "2082340",
            "2082339",
            "2082338",
            "2082335",
        ]
        for (let index = 0; index < data.channel.item.length; index++) {
            var id = data.channel.item[index].id;
            var title = data.channel.item[index].title;
            var ulr = data.channel.item[index].link;
            if (v_user(id.toString(), ids) == true) {
                bot.telegram.sendMessage('-1001307080127', title + "\n" + ulr)
                ids.push(id);
            }

        }
    });
});





////////


// bot.on('text', (ctx) => {
//     // Explicit usage
//     if (v_user(ctx.message.chat.username)) {
//         ctx.telegram.sendMessage('-1001173084708', ctx.message.text + "\n @" + ctx.message.chat.username)
//     } else {
//         ctx.reply(`انت غير مشترك في البوت لذلك عليك التواصل معا @dwaseel من اجل الاشتراك`)
//     }
// })
// bot.telegram.sendMessage('-1001307080127', '')
// bot.launch()