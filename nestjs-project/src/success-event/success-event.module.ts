import { Module } from '@nestjs/common';
import { SuccessEventService } from './success-event.service';
import { SuccessEventController } from './success-event.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SuccessEvent } from "./entities/success-event.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SuccessEvent])],
  controllers: [SuccessEventController],
  providers: [SuccessEventService]
})
export class SuccessEventModule {}
