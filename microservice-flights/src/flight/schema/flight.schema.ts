import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Country {
  @Prop({ required: true })
  descripcion: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
