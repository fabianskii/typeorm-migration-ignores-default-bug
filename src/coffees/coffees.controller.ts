import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
  } from '@nestjs/common';
  import { CoffeesService } from './coffees.service';
  
  @Controller('coffees')
  export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}
  
    @Get()
    findAll() {
      return this.coffeesService.findAll();
    }

  }