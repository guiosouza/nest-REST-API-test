import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { SoldiersModule } from './soldiers/soldiers.module';

@Module({
  imports: [UsersModule, DatabaseModule, SoldiersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
