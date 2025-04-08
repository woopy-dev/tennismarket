let server =require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');

const conn = async() => await mariadb.getConnection();
conn();

server.start(router.route, requestHandler.handle);