import { Injectable } from '@nestjs/common';
import { CatInterface } from '../../interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: CatInterface[] = [
    {
      id: 1,
      name: 'filemon',
      age: 2
    },
    {
      id: 2,
      name: 'murilio',
      age: 3
    },
    {
      id: 3,
      name: 'antonio',
      age: 1
    }
  ];

  create(cat: CatInterface) {
    cat.id = this.cats[this.cats.length -1].id + 1;
    this.cats.push(cat);

    return cat;
  }

  findAll(): CatInterface[] {
    return this.cats;
  }
}
