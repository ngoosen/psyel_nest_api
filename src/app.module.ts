import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursController } from './cours/cours.controller';
import { Cours } from './cours/cours.entity';
import { CoursService } from './cours/cours.service';
import { Notes } from './notes/notes.entity';
import { NoteService } from './notes/notes.service';
import { NotesController } from './notes/notes.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database/universite_demo.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Cours, Notes]),
  ],
  controllers: [AppController, CoursController, NotesController],
  providers: [AppService, CoursService, NoteService],
})
export class AppModule {}
