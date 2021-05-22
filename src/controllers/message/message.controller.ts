import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { MessageDto } from 'src/dtos/message-dto';
import { MessagesDto } from 'src/dtos/messages-dto';
import { MessagesService } from 'src/services/messages/messages.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessagesService) {}

  @Get('/target/:targetId')
  async getMessageByTargetId(@Param('targetId') targetId: number) {
    return await this.messageService.getMessagesByTargetId(targetId);
  }

  @Get('/from/:fromId')
  async getMessagesFrom(@Param('fromId') fromId: number) {
    return await this.messageService.getMessagesFrom(fromId);
  }

  @Get('/all')
  async getAllMessages(
    @Query('limit') limit: string,
    @Query('page') page: string,
  ): Promise<MessagesDto> {
    return await this.messageService.getAllMessages(limit, page);
  }

  @Post()
  async sendMessage(@Body() newMessage: MessageDto): Promise<MessageDto> {
    return await this.messageService.sendMessage(newMessage);
  }
}
