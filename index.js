const server = require('./server/server');

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`\n~~~ server listening on port ${port} ~~~\n`));
