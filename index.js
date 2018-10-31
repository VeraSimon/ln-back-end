require('dotenv').config();
const server = require('./server/server');

const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;

const port = process.env.PORT || 8080;
if (debugging) {
	server.listen(port, () => console.log(`\n~~~ server listening on port ${port} ~~~\n`));
} else {
	server.listen(port);
}
