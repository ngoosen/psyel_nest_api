/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDTO {
  @IsOptional()
  @IsString()
  matricule: string;

  @IsOptional()
  @IsString()
  mnemonique: string;

  @IsOptional()
  @IsNumber()
  note: number;
}
