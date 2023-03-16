import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '../entities/location.entity';
import { RoomEntity } from '../entities/room.entity';
import { LocationRoom } from 'src/entities/locationRooms.entity';

@Module({
  controllers: [RoomController],
  providers: [RoomService],
  imports: [TypeOrmModule.forFeature([Location, RoomEntity, LocationRoom])],
})
export class RoomModule {}
