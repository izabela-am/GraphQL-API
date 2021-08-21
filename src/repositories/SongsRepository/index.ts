import { MongoRepository, getMongoRepository } from 'typeorm';

import Song from '@entities/Song';
import { ISongsRepository } from './interfaces';

export default class SongsRepository implements ISongsRepository {
  private repository: MongoRepository<Song>;
  
  constructor() {
    this.repository = getMongoRepository(Song);
  }

  async create(song: Song): Promise<Song> {
    const newSong = this.repository.create(song);
    await this.repository.save(newSong);

    return newSong;
  }

  // async find(song: Song): Promise<Song> {
  //   const { title, album, recording_artist } = song;

  //   const foundSong = await this.repository.findOne({
  //     where: { title },
  //   });

  //   return foundSong;
  // }
}