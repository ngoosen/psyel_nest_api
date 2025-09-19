/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCoursDTO {
  @IsOptional()
  @IsString()
  mnemonique: string;

  @IsOptional()
  @IsString()
  intitule: string;

  @IsOptional()
  @IsNumber()
  credit: number;

  @IsOptional()
  @IsString()
  titulaire: string;
}
