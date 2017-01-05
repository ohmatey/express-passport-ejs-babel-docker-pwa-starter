import mongoose from 'mongoose'

const mongooseConfig = config => {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', _ => console.log('connection error'));
    db.once('open', _ => console.log('mongodb db opened'));
};

export default mongooseConfig
