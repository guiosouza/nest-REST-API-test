import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  
  private users = [
    {
      id: 1,
      name: 'Solid Snake',
      email: 'snake@outerheaven.org',
      role: 'FOX_HOUND',
    },
    {
      id: 2,
      name: 'Big Boss',
      email: 'boss@outerheaven.org',
      role: 'OUTER_HEAVEN',
    },
    {
      id: 3,
      name: 'Kazuhira Miller',
      email: 'miller@diamond.dog',
      role: 'DIAMONG_DOG',
    },
    {
      id: 4,
      name: 'Revolver Ocelot',
      email: 'ocelot@foxhound.org',
      role: 'FOX_HOUND',
    },
    {
      id: 5,
      name: 'Venom Snake',
      email: 'venom@diamond.dog',
      role: 'BIG_BOSS',
    },
  ];

  findAll(role?: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS';
  }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
