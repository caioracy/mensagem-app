import { Schema } from "mongoose";

export const MessageSchema = new Schema({
    from: Number,
    target_id: Number,
    media: Boolean,
    message: String
})