import path from 'path'
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT || 8080
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://<dbuser>:<dbpassword>@ds011872.mlab.com:11872/multivision',
        port: process.env.PORT || 80
    }
};
