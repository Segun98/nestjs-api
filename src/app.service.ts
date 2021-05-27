import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): {
    message: string;
}{
    return { message: 'Hi, this is the highest id do with REST!' };
  }
}
