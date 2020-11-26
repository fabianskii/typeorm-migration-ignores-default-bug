import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(@InjectRepository(Coffee) private readonly coffeeRepository: Repository<Coffee>, private readonly connection: Connection) {}
  
  findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne(id)
    if (!coffee) {
        throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

}