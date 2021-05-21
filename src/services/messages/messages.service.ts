import { BadRequestException, Injectable } from '@nestjs/common';
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

    async getAllMessages(limit: string, offset: string): Promise<MessageDto[]> {
        const allMessages = await this.messageRepository.getAllMessages(limit, offset);

        if(!allMessages.length)
            throw new BadRequestException('Nenhuma mensagem enviada ao servidor')
        return allMessages;

    } 

    getMessagesByTargetId(targetId: number): Promise<MessageDto[]> {
        return this.messageRepository.getMessagesByTargetId(targetId);
    }

    getMessagesFrom(fromId: number): Promise<MessageDto[]> {
        return this.messageRepository.getMessagesFrom(fromId);
    }
}
