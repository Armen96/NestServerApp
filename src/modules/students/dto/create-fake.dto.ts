/**
 * DTO: Data Transfer Offer
 */
import {
  IsInt,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsNumberString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from './create-address.dto';

export class CreateFakeDto {
  id: string;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  // @IsNumberString()
  // @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
