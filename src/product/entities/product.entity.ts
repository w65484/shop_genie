import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the product',
  })
  id: number;

  @ApiProperty({
    example: 'Product Name',
    description: 'The name of the product',
  })
  name: string;

  @ApiProperty({
    example: 'Product Description',
    description: 'The description of the product',
  })
  description: string;

  @ApiProperty({ example: 29.99, description: 'The price of the product' })
  price: number;
}
