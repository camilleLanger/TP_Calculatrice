import { PartialType } from '@nestjs/mapped-types';
import { CreateErrorEventDto } from './create-error-event.dto';

export class UpdateErrorEventDto extends PartialType(CreateErrorEventDto) {}
