if (process.env.NODE_ENV === 'production') {
  require('./server.prod.js')
} else {
  require('./server.dev.js');
}