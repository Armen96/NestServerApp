import { IsNotEmpty } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;
  line2?: string;
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  zip: string;
  @IsNotEmpty()
  state: string;
  @IsNotEmpty()
  address: string;
}
