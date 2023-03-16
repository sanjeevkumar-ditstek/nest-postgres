import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LocationRoom } from './locationRooms.entity';

@Entity('room')
export class RoomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  size: number;

  @OneToMany(() => LocationRoom, (locationRoom) => locationRoom.room, {
    cascade: true,
  })
  roomLocations: LocationRoom;
}
