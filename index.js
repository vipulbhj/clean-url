const fs = require('fs');
const url = require('url');

let data = fs.readFileSync('./assets/all-banned-porn-sites.txt').toString();
if(!data.trim()) {
    return "Empty File";
}

let arrayOfStr = data.split('\n');
arrayOfUrls = arrayOfStr.map((item) => {
    if(item.endsWith('\t')) {
        return item.substring(4, item.length -1);
    }
    return item.substring(4);
});


// methods to be exported
function checkCleanUrl(urlFromReq) {
    for(let url of arrayOfUrls) {
        if(urlFromReq.includes(url)) {
            return true;
        }
    }
    return false;
}


module.exports = checkCleanUrl;
