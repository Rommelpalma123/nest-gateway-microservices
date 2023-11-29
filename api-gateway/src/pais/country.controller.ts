import { CountryMSG } from '../common/constants';
import { CountryDTO } from './dto/country.dto';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ICountry } from 'src/common/interfaces/flight.interface';
import { ApiTags } from '@nestjs/swagger';
import { UpdateCountryDto } from './dto/update.country.dto';

@ApiTags('countries')
@Controller('api/v2/countries')
export class FlightController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxyFlight = this.clientProxy.clientProxyFlights();

  @Post()
  create(@Body() countryDTO: UpdateCountryDto): Observable<ICountry> {
    return this._clientProxyFlight.send(CountryMSG.CREATE, countryDTO);
  }

  @Get()
  findAll(): Observable<ICountry[]> {
    return this._clientProxyFlight.send(CountryMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<ICountry> {
    return this._clientProxyFlight.send(CountryMSG.FIND_ONE, id);
  }

  @Put()
  update(@Body() countryDTO: UpdateCountryDto): Observable<ICountry> {
    return this._clientProxyFlight.send(CountryMSG.UPDATE, countryDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyFlight.send(CountryMSG.DELETE, id);
  }
}
