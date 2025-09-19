/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateNoteDTO {
  @IsNotEmpty()
  @IsString()
  matricule: string;

  @IsNotEmpty()
  @IsString()
  mnemonique: string;

  @IsNotEmpty()
  @IsNumber()
  note: number;
}
