import { Injectable } from '@nestjs/common';
import { UserInterface } from './types';

@Injectable()
export class UsersService {
  private users: UserInterface[] = [
    { id: 1, username: "John", password: '123456' },
    { id: 2, username: "Marco", password: 'asdasd' },
    { id: 3, username: "Bolcman", password: '789456' },
  ];

  getUsers(): UserInterface[] {
    return this.users;
  }

  getUserByUserName(name: string): UserInterface {
    return this.users.find(i => i.username === name)
  }

  getUserById(id: number): UserInterface {
    return this.users.find(i => i.id === id)
  }
}
