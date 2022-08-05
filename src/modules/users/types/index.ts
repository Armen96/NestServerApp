import { Exclude } from 'class-transformer';

export interface UserInterface {
  id: number;
  username: string;
  password: string;
}

export class SerializationUser {
  id: number;
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializationUser>) {
    Object.assign(this, partial)
  }
}
