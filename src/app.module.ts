import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './controllers/message/message.controller';
import MessageRepository from './mongo/repository/message.repository';
import { MessageSchema } from './mongo/schemas/message.schema';
import { MessagesService } from './services/messages/messages.service';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://teste:1324@messagecl.xxday.mongodb.net/MessageCL?retryWrites=true&w=majority'),
    MongooseModule.forFeature([
      {name: 'message', schema: MessageSchema}]
    )
  ],
  controllers: [MessageController],
  providers: [MessagesService, MessageRepository],
})
export class AppModule {}
