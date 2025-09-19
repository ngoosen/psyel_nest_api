import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cours } from 'src/cours/cours.entity';
import { Repository } from 'typeorm';
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
import { Notes } from './notes.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Notes) private notesRepository: Repository<Notes>,
    @InjectRepository(Cours) private coursRepository: Repository<Cours>,
  ) {}

  findAll() {
    return this.notesRepository.find();
  }

  findByMatricule(matricule: string) {
    return this.notesRepository.findBy({ matricule });
  }

  async findByMnemonique(mnemonique: string) {
    const cours = await this.coursRepository.findOneBy({ mnemonique });

    if (!cours) {
      throw new NotFoundException('Aucun cours correspondant au mnemonique');
    }

    return this.notesRepository.findBy({ mnemonique });
  }

  async findByMatriculeAndMnemonique(matricule: string, mnemonique: string) {
    const cours = await this.coursRepository.findOneBy({ mnemonique });

    if (!cours) {
      throw new NotFoundException('Aucun cours correspondant au mnemonique');
    }

    return this.notesRepository.findBy({ matricule, mnemonique });
  }

  async create(note: CreateNoteDTO) {
    const cours = await this.coursRepository.findOneBy({
      mnemonique: note.mnemonique,
    });

    if (!cours) {
      throw new NotFoundException('Aucun cours correspondant au mnemonique');
    }

    const newNote = this.notesRepository.create(note);
    return this.notesRepository.save(newNote);
  }

  async update(id: number, newNote: UpdateNoteDTO) {
    const cours = await this.coursRepository.findOneBy({
      mnemonique: newNote.mnemonique,
    });

    if (!cours) {
      throw new NotFoundException('Aucun cours correspondant au mnemonique');
    }

    return this.notesRepository.update(id, newNote);
  }

  delete(id: number) {
    return this.notesRepository.delete(id);
  }
}
