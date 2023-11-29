import { PartialType } from '@nestjs/mapped-types';
import { CountryDTO } from './country.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCountryDto extends PartialType(CountryDTO) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
