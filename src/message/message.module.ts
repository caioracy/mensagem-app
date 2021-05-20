import { Module } from '@nestjs/common';
import { MessageController } from './controller/controller.controller';

@Module({
  controllers: [MessageController]
})
export class MessageModule {}
