const ranidb = require('ranidb');

const db = new ranidb(__dirname + "/../db/news.json", {idType: "empty"})

async function addNews(id) {
    if(db.filter({id: id}).length == 0){
        db.push({id:id})
    }
}

function IsExist(id) {
    if(db.filter({id: id.toString()}).length > 0){
        return true
    }

    return false
}

module.exports = { IsExist, addNews}