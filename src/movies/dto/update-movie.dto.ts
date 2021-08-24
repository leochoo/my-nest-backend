// update movie based on create-movie but make it not required and read only, since we only update some of it and not everything
import { IsNumber, IsString } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  readonly title?: string;
  @IsNumber()
  readonly year?: number;
  @IsString({ each: true })
  readonly genres?: string[];
  @IsString()
  readonly director?: string;
}
