import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAccount } from 'src/common/interfaces/account.interface';
import { ACCOUNT } from 'src/common/models/models';
import { AccountDTO } from './dto/account.dto';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(ACCOUNT.name) private readonly model: Model<IAccount>,
  ) {}

  async create(passengerDTO: AccountDTO): Promise<IAccount> {
    const newPassenger = new this.model(passengerDTO);
    return await newPassenger.save();
  }

  async findAll(): Promise<IAccount[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IAccount> {
    return await this.model.findById(id);
  }

  async update(passengerDTO): Promise<IAccount> {
    return await this.model.findByIdAndUpdate(passengerDTO._id, passengerDTO, {
      new: true,
    });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
