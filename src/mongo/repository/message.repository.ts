import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pagination as PaginateModel } from 'mongoose-paginate-ts';
import { MessageDto } from 'src/dtos/message-dto';
import { MessagesDto } from 'src/dtos/messages-dto';
import { Message } from '../interfaces/message.interface';

@Injectable()
export default class MessageRepository {
  constructor(
    @InjectModel('message')
    private readonly messageModel: PaginateModel<Message>,
  ) {}

  async sendMessage(newMessage: MessageDto): Promise<Message> {
    const sendedMessage = new this.messageModel(newMessage);
    return await sendedMessage.save();
  }

  async getAllMessages(limit: string, page: string): Promise<MessagesDto> {
    return await this.messageModel
      .paginate({ limit: Number(limit), page })
      .then(
        (result) =>
          new MessagesDto({
            messages: result.docs.map(
              (message) =>
                new MessageDto({
                  from: message.from,
                  target_id: message.target_id,
                  media: message.media,
                  message: message.message,
                }),
            ),
            limit: Number(limit),
            page: Number(page),
            count: result.totalDocs,
          }),
      );
  }

  async getMessagesByTargetId(targetId: number): Promise<MessageDto[]> {
    return await this.messageModel
      .find({ target_id: targetId }, { __v: false })
      .exec();
  }

  async getMessagesFrom(from: number): Promise<MessageDto[]> {
    return await this.messageModel.find({ from: from }, { __v: false }).exec();
  }
}
