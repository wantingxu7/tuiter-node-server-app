import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  replies: Number,
  retuits: Number,
  dislikes: Number,
  time: String,
  topic: String,
  username: String,
  handle: String,
  title: String,
  image: String,

}, {collection: 'tuits'});
export default schema;