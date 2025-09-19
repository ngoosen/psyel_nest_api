import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cours } from './cours.entity';
import { CreateCoursDTO } from './dto/create-cours.dto';
import { UpdateCoursDTO } from './dto/update-cours.dto';

@Injectable()
export class CoursService {
  constructor(
    @InjectRepository(Cours) private coursRepository: Repository<Cours>,
  ) {}

  findAll() {
    return this.coursRepository.find();
  }

  findByMnemonique(mnemonique: string) {
    return this.coursRepository.findBy({ mnemonique });
  }

  create(cours: CreateCoursDTO) {
    const newCours = this.coursRepository.create(cours);
    return this.coursRepository.save(newCours);
  }

  update(mnemonique: string, newCours: UpdateCoursDTO) {
    return this.coursRepository.update(mnemonique, newCours);
  }

  delete(mnemonique: string) {
    return this.coursRepository.delete(mnemonique);
  }
}
