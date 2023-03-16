import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocationRoom } from './locationRooms.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  street: string;

  @Column({ type: 'int' })
  streetNumber: number;

  @OneToMany(() => LocationRoom, (locationRoom) => locationRoom.location, {
    cascade: true,
  })
  locationRooms: LocationRoom;
}
