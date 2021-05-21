import { Injectable } from "@nestjs/common";
import { InjectModel} from '@nestjs/mongoose';
import { Model } from "mongoose";
import { MessageDto } from "src/dtos/message-dto";
import { Message } from "../interfaces/message.interface";

@Injectable()
export default class MessageRepository {
    
    constructor(
        @InjectModel('message') private readonly messageModel: Model<Message>
    ){}

    sendMessage(newMessage: MessageDto){
        const sendedMessage = new this.messageModel(newMessage);
        return sendedMessage.save();
    }

}
