import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Client {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  cedula: string;

  @Prop({ required: true })
  edad: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
