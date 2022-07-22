/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TankDatumWhereInput } from "./TankDatumWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TankDatumListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TankDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => TankDatumWhereInput)
  @IsOptional()
  @Field(() => TankDatumWhereInput, {
    nullable: true,
  })
  every?: TankDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => TankDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => TankDatumWhereInput)
  @IsOptional()
  @Field(() => TankDatumWhereInput, {
    nullable: true,
  })
  some?: TankDatumWhereInput;

  @ApiProperty({
    required: false,
    type: () => TankDatumWhereInput,
  })
  @ValidateNested()
  @Type(() => TankDatumWhereInput)
  @IsOptional()
  @Field(() => TankDatumWhereInput, {
    nullable: true,
  })
  none?: TankDatumWhereInput;
}
export { TankDatumListRelationFilter };
