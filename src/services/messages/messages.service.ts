import { Injectable } from '@nestjs/common';
import { MessageDto } from 'src/dtos/message-dto';
import MessageRepository from 'src/mongo/repository/message.repository';

@Injectable()
export class MessagesService {
    constructor(
        private readonly messageRepository: MessageRepository
    ){}

    sendMessage(newMessage: MessageDto): Promise<MessageDto> {
        return this.messageRepository.sendMessage(newMessage);    
    }    
}
