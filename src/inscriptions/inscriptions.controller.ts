import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateInscriptionDTO } from './dto/create-inscription.dto';
import { UpdateInscriptionDTO } from './dto/update-inscription.dto';
import { InscriptionsService } from './inscriptions.service';

@Controller('inscriptions')
export class InscriptionsController {
  constructor(private inscriptionsService: InscriptionsService) {}

  @Get()
  async findAll() {
    return this.inscriptionsService.findAll();
  }

  @Get('/:matricule')
  async findByMatricule(@Param('matricule') matricule: string) {
    return this.inscriptionsService.findByMatricule(matricule);
  }

  @Post()
  async create(@Body() body: CreateInscriptionDTO) {
    return this.inscriptionsService.create(body);
  }

  @Patch('/:matricule')
  async update(
    @Param('matricule') matricule: string,
    @Query('annee_etude') annee_etude: number,
    @Body() body: UpdateInscriptionDTO,
  ) {
    return this.inscriptionsService.update(matricule, annee_etude, body);
  }

  @Delete('/:matricule')
  async delete(
    @Param('matricule') matricule: string,
    @Query('annee_etude') annee_etude: number,
  ) {
    return this.inscriptionsService.delete(matricule, annee_etude);
  }
}
