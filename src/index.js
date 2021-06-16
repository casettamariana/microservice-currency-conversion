const webServer = require('./server/webServer');

try {
    webServer.start();
} catch (e) {
    console.error(e);
}