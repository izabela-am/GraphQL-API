import { Arg, Mutation, Resolver } from "type-graphql";

import Song from "@entities/Song";
import CreateSongService from "services/CreateSongService";
import { ISongsRepository } from "@repositories/SongsRepository/interfaces";
import SongsRepository from "@repositories/SongsRepository";

@Resolver()
export default class SongResolver {
  private songsRepository: ISongsRepository;
  private createSong: CreateSongService;

  constructor() {
    this.songsRepository = new SongsRepository();
    this.createSong = new CreateSongService(this.songsRepository);
  }

  @Mutation(returns => Song)
  async create(@Arg('song') song: Song): Promise<Song> {
    const newSong = await this.createSong.execute(song);

    return newSong;
  }
}
