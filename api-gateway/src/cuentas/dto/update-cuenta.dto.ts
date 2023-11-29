import { PartialType } from '@nestjs/mapped-types';
import { CreateCuentaDto } from './create-cuenta.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCuentaDto extends PartialType(CreateCuentaDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
