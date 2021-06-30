import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  users = [
    {
      name: 'Segun',
      age: 22,
    },
    {
      name: 'Tola',
      age: 12,
    },
    {
      name: 'Johnson',
      age: 20,
    },
  ];
  getHello(): Array<{name:String, age:number}> {
    return this.users
  }
  getHi(): {
    message: string;
  } {
    return { message: 'Hi, this is the highest id do with REST!' };
  }
}
