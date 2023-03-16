import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '../entities/location.entity';
import { RoomEntity } from '../entities/room.entity';
import { LocationRoom } from 'src/entities/locationRooms.entity';

@Module({
  controllers: [LocationController],
  providers: [LocationService],
  imports: [TypeOrmModule.forFeature([Location, RoomEntity, LocationRoom])],
})
export class LocationModule {}
