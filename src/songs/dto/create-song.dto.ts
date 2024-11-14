import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator"


export class CreateSongDto {
  
  @IsNotEmpty()
  @IsString()
  title: string;
  
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  hossz: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;
}
