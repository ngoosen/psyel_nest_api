/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInscriptionDTO {
  @IsNotEmpty()
  @IsString()
  matricule: string;

  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsNumber()
  annee_etude: number;

  @IsNotEmpty()
  @IsString()
  cours_json: string;
}
