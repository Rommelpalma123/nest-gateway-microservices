import { AccountMSG } from './../common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Body, Controller } from '@nestjs/common';
import { PassengerService } from './account.service';
import { AccountDTO } from './dto/account.dto';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(AccountMSG.CREATE)
  create(@Body() passengerDTO: AccountDTO) {
    return this.passengerService.create(passengerDTO);
  }

  @MessagePattern(AccountMSG.FIND_ALL)
  findAll() {
    return this.passengerService.findAll();
  }

  @MessagePattern(AccountMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.passengerService.findOne(id);
  }

  @MessagePattern(AccountMSG.UPDATE)
  update(@Payload() payload) {
    return this.passengerService.update(payload);
  }

  @MessagePattern(AccountMSG.DELETE)
  delete(@Payload() id: string) {
    return this.passengerService.delete(id);
  }
}
