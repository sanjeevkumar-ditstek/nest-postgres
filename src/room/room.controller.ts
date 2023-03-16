import { Body, Controller, Post, Put } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  async createRoom(@Body() roomDto: any): Promise<any> {
    return await this.roomService.createRoom(roomDto);
  }

  @Put()
  async updateRoom(@Body() roomDto: any): Promise<any> {
    return await this.roomService.updateRoom(roomDto);
  }
}
