import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { AccountMSG } from 'src/common/constants';
import { Observable } from 'rxjs';
import { IAccount } from 'src/common/interfaces/account.interface';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('acounts')
@Controller('api/v2/accounts')
export class CuentasController {
  constructor(private readonly cuentasService: ClientProxySuperFlights) {}
  private _clientProxyAccount = this.cuentasService.clientProxyAccount();

  @Post()
  create(@Body() createCuentaDto: CreateCuentaDto): Observable<IAccount> {
    return this._clientProxyAccount.send(AccountMSG.CREATE, createCuentaDto);
  }

  @Get()
  findAll(): Observable<IAccount[]> {
    return this._clientProxyAccount.send(AccountMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IAccount> {
    return this._clientProxyAccount.send(AccountMSG.FIND_ONE, id);
  }

  @Put()
  update(@Body() updateCuentaDto: UpdateCuentaDto): Observable<IAccount> {
    return this._clientProxyAccount.send(AccountMSG.UPDATE, updateCuentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<any> {
    return this._clientProxyAccount.send(AccountMSG.DELETE, id);
  }
}
