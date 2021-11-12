const fs = require('fs');
module.exports.payload = [];
module.exports.boot = (filePath = '') => {
    return readFileAsync(filePath);
}
function readFileAsync(filePath = '') {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    }).catch((err) => { });
}

function writeFileAsync(filePath = '') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(postData), (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(true);
            }
        })
    })
}


module.exports.create = (payload) => {
    console.log(payload, 'payload')
};