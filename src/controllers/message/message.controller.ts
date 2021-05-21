import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { isNumber, IsNumber } from 'class-validator';
import { MessageDto } from 'src/dtos/message-dto';
import { MessagesService } from 'src/services/messages/messages.service';

@Controller('message')
export class MessageController {

    constructor (private readonly messageService: MessagesService) {

    }
    
    @Get('/target/:targetId')
    getMessageByTargetId(@Param('targetId') targetId: number) {
        return this.messageService.getMessagesByTargetId(targetId)
    }

    @Get('/all')
    getAllMessages(@Query('limit') limit: string, @Query('offset') offset: string): Promise<MessageDto[]> {
        return this.messageService.getAllMessages(limit, offset);
    }

    @Post()
    sendMessage(@Body() newMessage:MessageDto): Promise<MessageDto> {
        return this.messageService.sendMessage(newMessage) 
    }
}
