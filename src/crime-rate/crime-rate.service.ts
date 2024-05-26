import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCrimeRateDto } from './dto/createCrimeRateDto'
import { HttpService } from '@nestjs/axios'
import { InjectModel } from '@nestjs/mongoose'
import { CrimeRate } from './crime-rate.schema'
import { Model } from 'mongoose'

@Injectable()
export class CrimeRateService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(CrimeRate.name) private crimeRateModel: Model<CrimeRate>,
  ) {}

  public async createCrimeRate(payload: CreateCrimeRateDto) {
    const city = await this.httpService.get(`http://localhost:8080/api/city/${payload.cityId}`);
    if (!city) throw new BadRequestException(`City with id ${payload.cityId} was not found.`)

    // const createdCrimeRate = await this.crimeRateModel.create(payload);
    // return createdCrimeRate.id;

    const id = 1;
    return id;
  }
}
