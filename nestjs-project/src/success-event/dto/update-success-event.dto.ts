import { PartialType } from '@nestjs/mapped-types';
import { CreateSuccessEventDto } from './create-success-event.dto';

export class UpdateSuccessEventDto extends PartialType(CreateSuccessEventDto) {}
