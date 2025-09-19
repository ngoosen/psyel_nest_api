import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('liste_inscriptions')
export class Inscriptions {
  @PrimaryColumn({ type: 'text' })
  matricule: string;

  @Column({ type: 'text' })
  nom: string;

  @Column({ type: 'text' })
  prenom: string;

  @PrimaryColumn({ type: 'integer' })
  annee_etude: number;

  @Column({ type: 'text' })
  cours_json: string;
}
