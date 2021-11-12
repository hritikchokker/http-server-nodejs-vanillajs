exports.route = (req, res) => {
    switch (req.method) {
        case 'GET':
            manageGETRequestResponse(req, res);
            break;
        case 'POST':
            managePOSTRequestResponse(req, res);
            break;
        case 'DELETE':
            manageDELETERequestResponse(req, res);
            break;
        case 'PUT' || 'PATCH':
            managePUTPATCHRequestResponse(req, res);
            break;

        default:
            break;
    }
    console.log(req.method, 'req method');
}


function managePOSTRequestResponse(req, res) {

}

function manageGETRequestResponse(req, res) {
    
    if(req.url === '/'){
        res.end('<h1>Hello World</h1>');
    }
}

function manageDELETERequestResponse(req, res) {

}

function managePUTPATCHRequestResponse(req, res) {

}