import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCuentaDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  /*@ApiProperty()
  @IsString()
  @IsNotEmpty()
  id_cliente: string;*/
}
