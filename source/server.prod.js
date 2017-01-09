import cluster from 'cluster'
import os from 'os'

import startApp from './startApp'
import config from './config/config'

const envConfig = config[config.env];
let workers = [];

if(cluster.isMaster){
    var workerCount = os.cpus().length;

    for(var i = 0; i < workerCount; i++) {
        const worker = cluster.fork();
        workers.push(worker);
    }

    cluster.on('exit', worker => {
        workers = workers.filter(w => w !== worker);

        setTimeout(_ => {
            const newWorker = cluster.fork();
            workers.push(newWorker);
        })
        console.log('Worker %d died :(', worker.id);
    });
}else{
    startApp(envConfig);
}