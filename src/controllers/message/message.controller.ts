import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { MessageDto } from 'src/dtos/message-dto';
import { MessagesService } from 'src/services/messages/messages.service';

@Controller('message')
export class MessageController {

    constructor (private readonly messageService: MessagesService) {

    }
    
    @Get('/:targetId')
    getMessageByTargetId(@Param('targetId') targetId: string) {
        return 'CU'
    }

    @Get('/all')
    getAllMessages(@Query('limit') limit: number, @Query('offset') offset: number) {
        return {...{limit, offset}}
    }

    @Post()
    sendMessage(@Body() newMessage:MessageDto): any {
        return this.messageService.sendMessage(newMessage) 
    }
}
