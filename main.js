const path = require('path');
const postUrl = path.normalize(`${__dirname}/posts.json`);
const db = require('./database');
const http = require('http');
const routeHandler = require('./routes');
let postData = [];
// boots database
// create a copy of data in postData var
(function () {
    console.log('called')
    db.boot(postUrl)
        .then(res => {
            if (res) {
                res = JSON.parse(res);
            }
            if (res && typeof (res) !== 'string') {
                postData = res;
            } else {
                postData = [];
            }
        }).catch(err => console.log(err));
}());

// creates HTTP Server

const httpClient = http.createServer(routeHandler.route);
const port = process.env.port || 3000;
httpClient.listen(port, () => {
    console.log('server is listening at port' + port);
})












