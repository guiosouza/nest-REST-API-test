import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SoldiersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createSoldierDto: Prisma.SoldierCreateInput) {
    return this.databaseService.soldier.create({
      data: createSoldierDto,
    });
  }

  async findAll(role?: Role) {
    if (role) {
      return this.databaseService.soldier.findMany({
        where: {
          role: role,
        },
      });
    }
    return this.databaseService.soldier.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.soldier.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateSoldierDto: Prisma.SoldierUpdateInput) {
    return this.databaseService.soldier.update({
      where: {
        id: id,
      },
      data: updateSoldierDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.soldier.delete({
      where: {
        id: id,
      },
    });
  }
}
