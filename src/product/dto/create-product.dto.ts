import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'The name of the product' })
  name: string;
  @ApiProperty({ description: 'The description of the product' })
  description: string;
  @ApiProperty({ description: 'The price of the product', example: 29.99 })
  price: number;
}
