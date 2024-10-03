import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['DIAMONG_DOG', 'OUTER_HEAVEN', 'FOX_HOUND', 'BIG_BOSS'], {
    message:
      'Valid role required (DIAMONG_DOG, OUTER_HEAVEN, FOX_HOUND, BIG_BOSS)',
  })
  role: 'DIAMONG_DOG' | 'OUTER_HEAVEN' | 'FOX_HOUND' | 'BIG_BOSS';
}
