import mongoose from 'mongoose'

const messageSchema = mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    location: {type: String},
    created_at: Date,
    updated_at: Date
});

messageSchema.pre('save', function(next) {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const Message = mongoose.model('message', messageSchema);

export default Message
