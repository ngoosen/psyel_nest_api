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
import { CreateNoteDTO } from './dto/create-note.dto';
import { UpdateNoteDTO } from './dto/update-note.dto';
import { NoteService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NoteService) {}

  @Get()
  async find(
    @Query('matricule') matricule: string,
    @Query('mnemonique') mnemonique: string,
  ) {
    if (matricule && mnemonique) {
      return this.notesService.findByMatriculeAndMnemonique(
        matricule,
        mnemonique,
      );
    }

    if (matricule) {
      return this.notesService.findByMatricule(matricule);
    }

    if (mnemonique) {
      return this.notesService.findByMnemonique(mnemonique);
    }

    return this.notesService.findAll();
  }

  @Post()
  async create(@Body() body: CreateNoteDTO) {
    return this.notesService.create(body);
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() body: UpdateNoteDTO) {
    return this.notesService.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.notesService.delete(id);
  }
}
