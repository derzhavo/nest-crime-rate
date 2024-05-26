import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CrimeRateDocument = HydratedDocument<CrimeRate>;

@Schema()
export class CrimeRate {
  @Prop()
  cityId: number;
  @Prop()
  crimeIndex: number;
  @Prop()
  safetyIndex: number;
  @Prop()
  concludedAt: Date;
}

export const CrimeRateSchema = SchemaFactory.createForClass(CrimeRate);