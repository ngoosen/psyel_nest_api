/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoursDTO {
  @IsNotEmpty()
  @IsString()
  mnemonique: string;

  @IsNotEmpty()
  @IsString()
  intitule: string;

  @IsNotEmpty()
  @IsNumber()
  credit: number;

  @IsNotEmpty()
  @IsString()
  titulaire: string;
}
