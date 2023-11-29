import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CountryDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
