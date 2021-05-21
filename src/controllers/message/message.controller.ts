import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
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
    getAllMessages(@Query('limit') limit: number, @Query('offset') offset: number) {
        return this.messageService.getAllMessages(), {...{limit, offset}}
    }

    @Post()
    sendMessage(@Body() newMessage:MessageDto): any {
        return this.messageService.sendMessage(newMessage) 
    }
}
