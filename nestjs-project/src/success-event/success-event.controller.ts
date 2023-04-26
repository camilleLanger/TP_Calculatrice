import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuccessEventService } from './success-event.service';
import { CreateSuccessEventDto } from './dto/create-success-event.dto';
import { UpdateSuccessEventDto } from './dto/update-success-event.dto';

@Controller('success-event')
export class SuccessEventController {
  constructor(private readonly successEventService: SuccessEventService) {}

  @Post()
  create(@Body() createSuccessEventDto: CreateSuccessEventDto) {
    console.log(createSuccessEventDto)
    return this.successEventService.create(createSuccessEventDto);
  }

}
