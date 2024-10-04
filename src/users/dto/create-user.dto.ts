import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['DIAMOND_DOG', 'OUTER_HEAVEN', 'FOX_HOUND', 'BIG_BOSS'], {
    message:
      'Valid role required (DIAMOND_DOG, OUTER_HEAVEN, FOX_HOUND, BIG_BOSS)',
  })
  role: 'DIAMOND_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS';
}
