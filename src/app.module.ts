import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { SoldiersModule } from './soldiers/soldiers.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    SoldiersModule,
    ThrottlerModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // one minute
        limit: 3, // times to request
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 110,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
