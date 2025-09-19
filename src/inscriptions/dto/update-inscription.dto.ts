/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateInscriptionDTO {
  @IsOptional()
  @IsString()
  matricule: string;

  @IsOptional()
  @IsString()
  nom: string;

  @IsOptional()
  @IsString()
  prenom: string;

  @IsOptional()
  @IsNumber()
  annee_etude: number;

  @IsOptional()
  @IsString()
  cours_json: string;
}
