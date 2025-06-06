import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProperties(
    @Query('start') start?: number,
    @Query('end') end?: number,
    @Query('properties') propertyIds?: string[],
  ): string {
    return this.appService.getProperties(start, end, propertyIds);
  }
}
