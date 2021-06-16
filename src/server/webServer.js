const express = require('express');
const app = express();
const port = 3000;
const routes = require("./routes");

var server = null;

function start() {
    
    app.use("/", routes);
    
    try {

        server = app.listen(port);
        let host = server.address();

        console.log("Server listening on " + host.address + ":" + host.port);
        
        return true;
    } catch (e) {
        console.log("Error on Start Server", e);
        return false;
    }
}

module.exports = { start };
