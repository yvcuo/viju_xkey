const genId1 = require('grem_xid');
const genId2 = require('eoyd_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|D52Pdtt1lM|' + genId2()).digest('base64');
}


module.exports = generateKey;
