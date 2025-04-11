import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(createCatDto: CreateCatDto): string {
    return `This action adds a new cat with name ${createCatDto.name}`;
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
