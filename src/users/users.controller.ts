import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(
    @Query('role')
    role?: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS',
  ) {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // Unary plus to convert to number
  }

  @Post()
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    userUpdated: {
      name: string;
      email: string;
      role: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS';
    },
  ) {
    return this.usersService.update(+id, userUpdated);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
