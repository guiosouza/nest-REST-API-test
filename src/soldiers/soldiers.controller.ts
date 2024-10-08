import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { Prisma, Role } from '@prisma/client';

@Controller('soldiers')
export class SoldiersController {
  constructor(private readonly soldiersService: SoldiersService) {}

  @Post()
  create(@Body() createSoldierDto: Prisma.SoldierCreateInput) {
    return this.soldiersService.create(createSoldierDto);
  }

  @Get()
  findAll(@Query('role') role?: Role) {  // Usando o tipo Role do Prisma
    return this.soldiersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldiersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSoldierDto: Prisma.SoldierUpdateInput,
  ) {
    return this.soldiersService.update(+id, updateSoldierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldiersService.remove(+id);
  }
}
