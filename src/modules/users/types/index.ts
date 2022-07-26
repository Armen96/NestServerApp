import { Exclude } from 'class-transformer';

export interface UserInterface {
  username: string;
  password: string;
}


export class SerializationUser {
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializationUser>) {
    Object.assign(this, partial)
  }
}
