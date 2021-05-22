import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Message extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly from: Number;
  readonly target_id: Number;
  readonly media: Boolean;
  readonly message: String;
}
