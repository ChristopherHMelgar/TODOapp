const {Schema, model, Document} = require('mongoose');

const taskSchema = new Schema({
   name: String,
   description: String,
   status: String,
}, {
   timestamps: true
});

module.exports = model('Task', taskSchema);