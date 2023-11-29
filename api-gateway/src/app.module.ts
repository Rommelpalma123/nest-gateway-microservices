import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './pais/country.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { CuentasModule } from './cuentas/cuentas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
    FlightModule,
    AuthModule,
    ClientModule,
    CuentasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
