import { COUNTRIES } from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FlightController } from './country.controller';
import { FlightService } from './country.service';
import { CountrySchema } from './schema/flight.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'countries', schema: CountrySchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: COUNTRIES.name,
        useFactory: () => {
          CountrySchema;
        },
      },
    ]),
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
