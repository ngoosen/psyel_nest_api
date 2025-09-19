import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInscriptionDTO } from './dto/create-inscription.dto';
import { UpdateInscriptionDTO } from './dto/update-inscription.dto';
import { Inscriptions } from './inscriptions.entity';

@Injectable()
export class InscriptionsService {
  constructor(
    @InjectRepository(Inscriptions)
    private inscriptionsService: Repository<Inscriptions>,
  ) {}

  findAll() {
    return this.inscriptionsService.find();
  }

  findByMatricule(matricule: string) {
    return this.inscriptionsService.findBy({ matricule });
  }

  create(inscription: CreateInscriptionDTO) {
    const newInscription = this.inscriptionsService.create(inscription);
    return this.inscriptionsService.save(newInscription);
  }

  update(
    matricule: string,
    annee_etude: number,
    newInscription: UpdateInscriptionDTO,
  ) {
    return this.inscriptionsService.update(
      { matricule, annee_etude },
      newInscription,
    );
  }

  delete(matricule: string, annee_etude: number) {
    return this.inscriptionsService.delete({ matricule, annee_etude });
  }
}
