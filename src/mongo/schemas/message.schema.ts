import { Mongoose, Schema } from 'mongoose';
import { mongoosePagination } from 'mongoose-paginate-ts';

export const MessageSchema = new Schema({
  from: Number,
  target_id: Number,
  media: Boolean,
  message: String,
}).plugin(mongoosePagination);
