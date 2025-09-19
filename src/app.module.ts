import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursController } from './cours/cours.controller';
import { Cours } from './cours/cours.entity';
import { CoursService } from './cours/cours.service';
import { InscriptionsController } from './inscriptions/inscriptions.controller';
import { Inscriptions } from './inscriptions/inscriptions.entity';
import { InscriptionsService } from './inscriptions/inscriptions.service';
import { NotesController } from './notes/notes.controller';
import { Notes } from './notes/notes.entity';
import { NoteService } from './notes/notes.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/universite_demo.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Cours, Notes, Inscriptions]),
  ],
  controllers: [
    AppController,
    CoursController,
    NotesController,
    InscriptionsController,
  ],
  providers: [AppService, CoursService, NoteService, InscriptionsService],
})
export class AppModule {}
