import { Module } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { SoldiersController } from './soldiers.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SoldiersController],
  providers: [SoldiersService],
})
export class SoldiersModule {}
