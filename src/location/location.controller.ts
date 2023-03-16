import { Body, Controller, Post, Put } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Post()
  async createLocation(@Body() locationDto: any): Promise<any> {
    return await this.locationService.createLocation(locationDto);
  }

  @Put()
  async updateLocation(@Body() locationDto: any): Promise<any> {
    return await this.locationService.updateLocation(locationDto);
  }
}
