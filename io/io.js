const fs = require('fs');
module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        if(reject){console.log(reject);}
        var contenu = fs.readFileSync(filePath, 'utf8');
        contenu = Buffer.from(contenu, 'hex').toString('utf8');
        if(contenu)
            resolve(contenu)
    });
}
