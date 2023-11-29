import { Module } from '@nestjs/common';
import { ACCOUNT } from '../common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengerController } from './account.controller';
import { PassengerService } from './account.service';
import { AccountSchema } from './schema/account.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ACCOUNT.name,
        useFactory: () => AccountSchema,
      },
    ]),
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
