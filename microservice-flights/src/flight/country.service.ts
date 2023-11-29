import { CountryDTO } from './dto/country.dto';
import { COUNTRIES } from '../common/models/models';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICountry } from 'src/common/interfaces/country.interface';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(COUNTRIES.name)
    private readonly model: Model<ICountry>,
  ) {}

  async create(countryhtDTO: CountryDTO): Promise<ICountry> {
    const newFlight = new this.model(countryhtDTO);
    return await newFlight.save();
  }

  async findAll(): Promise<ICountry[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<ICountry> {
    return await this.model.findById(id);
  }

  async update(countryhtDTO): Promise<ICountry> {
    return await this.model.findByIdAndUpdate(countryhtDTO._id, countryhtDTO, {
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
