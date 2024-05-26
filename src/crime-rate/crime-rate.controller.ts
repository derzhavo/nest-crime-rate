import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { CreateCrimeRateDto } from './dto/createCrimeRateDto'
import { CrimeRateService } from './crime-rate.service'

@Controller('api/crime-rate')
export class CrimeRateController {
  constructor(
    private readonly crimeRateService: CrimeRateService,
  ) {}
  @Post('/')
  public async createCrimeRate(@Body() createCrimeRateDto: CreateCrimeRateDto) {
    const id = await this.crimeRateService.createCrimeRate(createCrimeRateDto);
  }
}
