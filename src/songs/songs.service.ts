import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity'
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
  db: PrismaService;
  constructor(db: PrismaService){
    this.db = db;
  }


  songs: Song[] = [
    {
      id: 1,
      author: "lo:za",
      title: "Easy flow",
      length: 433,
      price: 10,
      rating: 5
    },
    {
      id: 2,
      author: "Emery Warman",
      title: "Prove them wrong",
      length: 415,
      price: 15,
      rating: 5
    }
  ];

  nextId = 1;

  create(createSongDto: CreateSongDto) {
    this.songs.push({
      ...createSongDto,
      id: this.nextId
    });

    this.songs.push(newSong)
    this.nextId++;
    return newSong;
  }


  findAll() {
    return `This action returns all songs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    const index = this.songs.findIndex(song => song.id == id);
    if(index == -1){
      return undefined;
    }

    const newSong = {
      ...this.songs[index],
      ...updateSongDto,
    }

    this.songs[index] = newSong

  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
