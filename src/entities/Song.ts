import { Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from 'typeorm';

@Entity('song')
export default class Song {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  album: string;

  @Column()
  recording_artist: string;

  @Column()
  released_at: string;

  @Column()
  tab: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
