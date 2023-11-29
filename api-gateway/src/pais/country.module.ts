import { ProxyModule } from '../common/proxy/proxy.module';
import { Module } from '@nestjs/common';
import { FlightController } from './country.controller';

@Module({
  imports: [ProxyModule],
  controllers: [FlightController],
})
export class FlightModule {}
