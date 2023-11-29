import { ClientService } from './client.service';
import { ClientDTO } from './dto/client.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClientMsg } from 'src/common/constants';

@Controller()
export class ClientController {
  constructor(private readonly studentService: ClientService) {}

  @MessagePattern(ClientMsg.CREATE)
  create(@Payload() clienttDTO: ClientDTO) {
    return this.studentService.create(clienttDTO);
  }

  @MessagePattern(ClientMsg.FIND_ALL)
  findAll() {
    return this.studentService.findAll();
  }

  @MessagePattern(ClientMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.studentService.findOne(id);
  }
  @MessagePattern(ClientMsg.UPDATE)
  update(@Payload() payload) {
    return this.studentService.update(payload);
  }

  @MessagePattern(ClientMsg.DELETE)
  delete(@Payload() id: string) {
    return this.studentService.delete(id);
  }
}
