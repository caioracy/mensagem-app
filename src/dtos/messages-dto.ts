import { MessageDto } from './message-dto';

export class MessagesDto {
  constructor(
    props: Pick<MessagesDto, 'messages' | 'limit' | 'page' | 'count'>,
  ) {
    this.messages = props.messages;
    this.limit = props.limit;
    this.page = props.page;
    this.count = props.count;
  }
  readonly messages: MessageDto[];
  readonly limit: Number;
  readonly page: Number;
  readonly count: Number;
}
