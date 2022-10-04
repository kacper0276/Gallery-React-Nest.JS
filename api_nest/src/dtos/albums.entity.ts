import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Albums {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameAlbum: string;

  @Column()
  miniImg: string;

  @Column()
  owner: string;
}
