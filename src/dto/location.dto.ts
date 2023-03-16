import { IsArray, IsNumber, IsString } from 'class-validator';

export class LocationDto {
  @IsNumber()
  id: number;

  @IsString()
  street: string;

  @IsNumber()
  streetNumber: number;

  @IsArray()
  locationRooms: any;
}
