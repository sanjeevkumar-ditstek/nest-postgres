import {
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from './location.entity';
import { RoomEntity } from './room.entity';

@Entity()
export class LocationRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Location, (location) => location.locationRooms, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'locationId' })
  location: Location;

  @ManyToOne(() => RoomEntity, (roomEntity) => roomEntity.roomLocations, {
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'roomId' })
  room: RoomEntity;
}
