import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateCatDto } from '@/cats/cats.dto';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  create(
    @Body() createCatDto: CreateCatDto,
    // { passthrough: true } is used to set the response status
    // and not send the response immediately
    // @Res() is used to inject the response object
    @Res({ passthrough: true }) res: Response,
  ): CreateCatDto {
    this.catsService.create(createCatDto);
    res.status(HttpStatus.OK);
    return createCatDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, createCatDto: CreateCatDto): string {
    return `This action updates a #${id} cat with name ${createCatDto.name}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes a #${id} cat`;
  }
}
