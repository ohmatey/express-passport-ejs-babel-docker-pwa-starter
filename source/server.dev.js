import startApp from './startApp'
import config from './config/config'

const envConfig = config[config.env];

startApp(envConfig);