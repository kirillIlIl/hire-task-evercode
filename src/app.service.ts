import { Injectable, NotFoundException } from '@nestjs/common';
import { ResultStorage } from './app.repository';
import { RetrieveDto } from './dto/retrive.dto';

@Injectable()
export class AppService {
  constructor(private repository: ResultStorage) {}

  getByID(id: string): number {
    const res = this.repository.getById(id);
    if (res === null) {
      throw new NotFoundException(`Task with ID ${id} was not found`);
    }
    return res;
  }

  generate(): RetrieveDto {
    return this.repository.generate();
  }
}
