const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// const SALT_ROUNDS = 6;

const noteSchema = new Schema({
  text: {type: String, required: true},
  user: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }],
    required: true
  }
//   password: {
//     type: String,
//     required: true
//   }
}, {
  timestamps: true,
//   toJSON: {
//     transform: function(doc, ret) {
//       delete ret.password;
//       return ret;
//     }
//   }
});

// userSchema.pre('save', async function(next) {
//   // 'this' is the user document
//   if (!this.isModified('password')) return next();
//   // Replace the password with the computed hash
//   this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
// });

module.exports = mongoose.model(noteSchema);
