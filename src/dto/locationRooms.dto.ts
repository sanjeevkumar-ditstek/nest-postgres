import { IsNumber, IsObject } from 'class-validator';
import { LocationDto } from './location.dto';
import { RoomDto } from './room.dto';

export class LocationRoomsDto {
  @IsNumber()
  id: number;

  @IsObject()
  room: RoomDto;

  @IsObject()
  location: LocationDto;
}
