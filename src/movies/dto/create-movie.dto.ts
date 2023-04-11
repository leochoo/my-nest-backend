import {
  isNumber,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];

  @IsOptional()
  @IsString()
  readonly director: string;

  @IsOptional()
  @IsObject()
  readonly reviews: {
    positive: number;
    negative: number;
  };
}
