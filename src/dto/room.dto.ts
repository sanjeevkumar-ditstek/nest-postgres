import { IsNumber, IsObject, IsString } from 'class-validator';

export class RoomDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsNumber()
  size: number;
}
