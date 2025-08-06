import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { randomInteger } from './utils/helpers';
import { RetrieveDto } from './dto/retrive.dto';

@Injectable()
export class ResultStorage {
  private storage: Record<string, number> = {};

  getById(id: string): number | null {
    return this.storage[id] ?? null;
  }

  generate(): RetrieveDto {
    const id = uuid();
    const result = randomInteger(1, 1000);
    this.storage[id] = result;
    return { id, result };
  }
}
