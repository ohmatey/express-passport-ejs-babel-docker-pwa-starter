import path from 'path'
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/platform',
        port: process.env.PORT || 8080
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/platform',
        port: process.env.PORT || 27017
    }
};
