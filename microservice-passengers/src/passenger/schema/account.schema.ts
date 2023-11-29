import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Account {
  @Prop({ required: true })
  descripcion: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
