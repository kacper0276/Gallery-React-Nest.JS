import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  img: string;

  @Column()
  album: string;

  @Column()
  optionalDescription: string;

  @Column()
  owner: string;
}
