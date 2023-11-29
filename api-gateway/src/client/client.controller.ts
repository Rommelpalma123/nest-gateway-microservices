import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { ClientDTO } from './dto/client.dto';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { IClient } from 'src/common/interfaces/client.interface';

@ApiTags('clients')
@Controller('api/v2/clients')
export class ClientController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyStudent = this.clientProxy.clientProxyClient();

  @Post()
  create(@Body() clientDTO: ClientDTO): Observable<IClient> {
    return this._clientProxyStudent.send(ClientMSG.CREATE, clientDTO);
  }

  @Get()
  findAll(): Observable<IClient[]> {
    return this._clientProxyStudent.send(ClientMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IClient> {
    return this._clientProxyStudent.send(ClientMSG.FIND_ONE, id);
  }

  @Put()
  update(@Body() clientDTO: ClientDTO): Observable<IClient> {
    return this._clientProxyStudent.send(ClientMSG.UPDATE, clientDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyStudent.send(ClientMSG.DELETE, id);
  }
}
