const { Basecamp4 } = require('./dist/nodes/Basecamp4/Basecamp4.node');
const { Basecamp4OAuth2Api } = require('./dist/credentials/Basecamp4OAuth2Api.credentials');

module.exports = {
	nodes: [Basecamp4],
	credentials: [Basecamp4OAuth2Api],
};
