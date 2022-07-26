import { Injectable } from '@nestjs/common';
import { UserInterface } from './types';

@Injectable()
export class UsersService {
  private users: UserInterface[] = [
    { username: "John", password: '123456' },
    { username: "Marco", password: 'asdasd' },
    { username: "Bolcman", password: '789456' },
  ];

  getUsers(): UserInterface[] {
    return this.users;
  }

  getUserByUserName(name: string): UserInterface {
    return this.users.find(i => i.username === name)
  }
}
