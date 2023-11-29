import { MessagePattern, Payload } from '@nestjs/microservices';
import { CountryDTO } from './dto/country.dto';
import { FlightService } from './country.service';
import { Controller } from '@nestjs/common';
import { CountryMSG } from 'src/common/constants';

@Controller()
export class FlightController {
  constructor(private readonly countryService: FlightService) {}

  @MessagePattern(CountryMSG.CREATE)
  create(@Payload() countryDTO: CountryDTO) {
    return this.countryService.create(countryDTO);
  }

  @MessagePattern(CountryMSG.FIND_ALL)
  findAll() {
    return this.countryService.findAll();
  }

  @MessagePattern(CountryMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.countryService.findOne(id);
  }

  @MessagePattern(CountryMSG.UPDATE)
  update(@Payload() payload) {
    return this.countryService.update(payload);
  }

  @MessagePattern(CountryMSG.DELETE)
  delete(@Payload() id: string) {
    return this.countryService.delete(id);
  }
}
