import { ClientDTO } from './dto/client.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from 'src/common/models/models';
import { IClient } from 'src/common/interfaces/client.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<IClient>,
  ) {}

  async create(clientDTO: ClientDTO): Promise<IClient> {
    const newStudent = new this.clientModel(clientDTO);
    return await newStudent.save();
  }

  async findAll() {
    return await this.clientModel.find();
  }

  async findOne(id: string): Promise<IClient> {
    return await this.clientModel.findById(id);
  }

  async update(clientDTO): Promise<IClient> {
    return await this.clientModel.findByIdAndUpdate(clientDTO._id, clientDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.clientModel.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
