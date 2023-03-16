import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity } from '../entities/room.entity';
import { Repository } from 'typeorm';
import { RoomDto } from '../dto/room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private repository: Repository<RoomEntity>,
  ) {}

  async createRoom(roomDto: RoomDto): Promise<any> {
    const roomEntity: RoomEntity = this.repository.create(roomDto);
    return await this.repository.save(roomEntity);
  }

  async updateRoom(roomDto: RoomEntity): Promise<any> {
    const roomEntity = await this.repository.preload(roomDto);
    return await this.repository.save(roomEntity);
  }
}
