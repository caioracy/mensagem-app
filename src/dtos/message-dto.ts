import {
  IsNumber,
  IsString,
  IsBoolean,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class MessageDto {
  constructor(
    props: Pick<MessageDto, 'from' | 'target_id' | 'media' | 'message'>,
  ) {
    this.message = props.message;
    this.media = props.media;
    this.target_id = props.target_id;
    this.from = props.from;
  }
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly from: Number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly target_id: Number;

  @IsBoolean()
  @IsNotEmpty()
  readonly media: Boolean;

  @IsString()
  @IsNotEmpty()
  readonly message: String;
}
