import Song from "@entities/Song";
import { ISongsRepository } from "@repositories/SongsRepository/interfaces";

export default class CreateSongService {
  constructor(private songsRepository: ISongsRepository) {}
  
  async execute(song: Song): Promise<Song> {
    const newSong = await this.songsRepository.create(song);

    return newSong;
  }  
}