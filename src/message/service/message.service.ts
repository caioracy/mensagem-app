import { Injectable } from '@nestjs/common';
import { MessageDto} from 'src/message/dto/message.dto';

@Injectable()
export class MessageService {
    public messages: MessageDto[] = [];

    create(message: MessageDto): MessageDto {
        this.messages.push(message);
        return message;
    }

    findAll(): MessageDto[] {
        return this.messages;
    }

}
