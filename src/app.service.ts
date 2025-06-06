import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProperties(start?: number, end?: number, propertyIds?: string[]): string {
    return 'Hello World!!';
  }
}
