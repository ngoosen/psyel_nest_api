import { Cours } from 'src/cours/cours.entity';
import { Column, Entity, ForeignKey, PrimaryGeneratedColumn } from 'typeorm';

@Entity('liste_notes')
@ForeignKey(() => Cours, ['mnemonique'], ['mnemonique'])
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  matricule: string;

  @Column({ type: 'text' })
  @ForeignKey(() => Cours, 'mnemonique')
  mnemonique: string;

  @Column({ type: 'integer' })
  note: number;
}
