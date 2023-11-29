import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientSchema } from './schema/client.schema';
import { Client } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './client.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'clients', schema: ClientSchema }]),
    MongooseModule.forFeatureAsync([
      {
        name: Client.name,
        useFactory: () => {
          ClientSchema;
        },
      },
    ]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
