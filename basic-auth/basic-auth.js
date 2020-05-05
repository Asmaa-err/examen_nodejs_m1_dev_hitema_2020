const crypto = require('crypto');
//fonction d'encodage
function sha1Encode(data) {
    return crypto.createHash('sha1').update(data).digest('hex')
}

module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization; 
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    // 'user:paswword'
    const authentication = decoded.split(':');
    var password = "password";
    // user et password valides
    const isValid = authentication[0] === 'node' && authentication[1] === sha1Encode(password);

    // si pas authentifié
    isValid ? next() : response.sendStatus(401);
}