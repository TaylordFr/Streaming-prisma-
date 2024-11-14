import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator"


export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumber()
  length: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
