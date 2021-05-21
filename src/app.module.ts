import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './controllers/message/message.controller';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://teste:1324@messagecl.xxday.mongodb.net/MessageCL?retryWrites=true&w=majority')

  ],
  controllers: [MessageController],
  providers: [],
})
export class AppModule {}
