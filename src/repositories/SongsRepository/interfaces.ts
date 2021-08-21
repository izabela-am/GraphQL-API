import Song from "@entities/Song";

export interface ISongsRepository {
  create(song: Song): Promise<Song>;
}