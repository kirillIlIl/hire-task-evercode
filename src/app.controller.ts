import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { RetrieveDto } from './dto/retrive.dto';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  retrieve(@Param('id') id: string): number {
    return this.appService.getByID(id);
  }

  @Post('/generate')
  generate(): RetrieveDto {
    return this.appService.generate();
  }
}

/*
Нужно написать Rest API с двумя методами:
generate() - отдаёт случайное число от 1 до 1000. Каждой генерации присваивается уникальный id и хранится в произвольном месте (проще - лучше)
retrieve(id) - получение результата генерации по id
Результат нужно положить в гитхаб/гитлаб репозиторий.
 */
