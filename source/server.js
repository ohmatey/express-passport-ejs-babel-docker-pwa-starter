import express from 'express'
// import cluster from 'cluster'
// import os from 'os'

import config from './config/config'
import routes from './routes/routes'
import mongooseConfig from './config/mongoose'


const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envConfig = config[env];
// var workers = [];
// if(cluster.isMaster){
//     var workerCount = 1 || os.cpus().length;
//
//     for(var i = 0; i < workerCount; i++) {
//         var worker = cluster.fork();
//         workers.push(worker);
//     }
//
//     cluster.on('exit', worker => {
//         workers = workers.filter(w => w !== worker);
//
//         setTimeout(_ => {
//             const newWorker = cluster.fork();
//             workers.push(newWorker);
//         })
//         console.log('Worker %d died :(', worker.id);
//     });
// }else{
    const app = express();

    mongooseConfig(envConfig);

    app.get('/', function (req, res) {
        res.status(200).send('Hello World!');
    });

    app.use('/api', routes);



    app.listen(envConfig.port);
    console.log('Application running!', envConfig.port);

// }
