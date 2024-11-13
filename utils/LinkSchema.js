// models/User.js
import mongoose from 'mongoose';

const NwerSchema = new mongoose.Schema({
  link1:String,
  linktext1:String,
  link2:String,
  linktext2:String,
  link3:String,
  linktext3:String,
  pic: String,
  desc: String,
  handle: { type: String, unique: true } // Adding uniqueness constraint for handle
});

export default mongoose.models.Newr || mongoose.model('Newr', NwerSchema);
