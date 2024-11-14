import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
  db: PrismaService;
  constructor(db: PrismaService){
    this.db = db;
  }


  create(createSongDto: CreateSongDto) {
   return  this.db.songs.create({
      data: createSongDto
    })
  }

  findAll() {
    return this.db.songs.findMany();
  }

  findOne(id: number) {
    return this.db.songs.findUnique({
      where: { id: id },
    })
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return this.db.songs.update({
      where: { 
        id: id 
      },
      data: updateSongDto
    })
  }

  remove(id: number) {
    return this.db.songs.delete({
      where: {
        id: id
      }
    })
  }
}
