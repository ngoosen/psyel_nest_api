import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('liste_cours')
export class Cours {
  @PrimaryColumn({ type: 'text' })
  mnemonique: string;

  @Column({ type: 'text' })
  intitule: string;

  @Column({ type: 'integer' })
  credit: number;

  @Column({ type: 'text' })
  titulaire: string;
}
