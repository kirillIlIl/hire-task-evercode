import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResultStorage } from './app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ResultStorage],
})
export class AppModule {}
