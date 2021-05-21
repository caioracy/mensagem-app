import { IsNumber, IsString, IsBoolean, IsNotEmpty, IsPositive } from 'class-validator';

export class MessageDto {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly from: Number

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly target_id: Number

    @IsBoolean()
    @IsNotEmpty()
    readonly media: Boolean

    @IsString()
    @IsNotEmpty()
    readonly message: String
}
