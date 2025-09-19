import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursService } from './cours.service';
import { CreateCoursDTO } from './dto/create-cours.dto';
import { UpdateCoursDTO } from './dto/update-cours.dto';

@Controller('cours')
export class CoursController {
  constructor(private coursService: CoursService) {}

  @Get()
  async findAll() {
    return this.coursService.findAll();
  }

  @Get('/:mnemonique')
  async findByMnemonique(@Param('mnemonique') mnemonique: string) {
    return this.coursService.findByMnemonique(mnemonique);
  }

  @Post()
  async create(@Body() body: CreateCoursDTO) {
    return this.coursService.create(body);
  }

  @Patch('/:mnemonique')
  async update(
    @Param('mnemonique') mnemonique: string,
    @Body() body: UpdateCoursDTO,
  ) {
    return this.coursService.update(mnemonique, body);
  }

  @Delete('/:mnemonique')
  async delete(@Param('mnemonique') mnemonique: string) {
    return this.coursService.delete(mnemonique);
  }
}
