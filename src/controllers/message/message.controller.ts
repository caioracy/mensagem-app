import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageDto } from 'src/dtos/message-dto';

@Controller('message')
export class MessageController {
    
    @Get()
    getAllMessages(): string {
        return 'CU'
    }

    @Post()
    sendMessage(@Body() messageDto:MessageDto): any {
        return messageDto   
    }
}
