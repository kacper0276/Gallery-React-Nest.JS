import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  mainFunction() {
    return 'Hello';
  }
}
