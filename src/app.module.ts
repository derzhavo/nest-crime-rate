import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrimeRateModule } from './crime-rate/crime-rate.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/crime-rate'), CrimeRateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
