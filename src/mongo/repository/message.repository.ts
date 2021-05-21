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

    async sendMessage(newMessage: MessageDto): Promise<Message> {
        const sendedMessage = new this.messageModel(newMessage);
        return  await sendedMessage.save();
    }

    async getAllMessages(): Promise<MessageDto[]>  {
        return await this.messageModel.find({}, { __v: false}).exec();
    }

    async getMessagesByTargetId(targetId: number): Promise<MessageDto[]> {
        return await this.messageModel.find({target_id: targetId}).exec();
    }

}
