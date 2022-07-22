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
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { JobCreateNestedManyWithoutTestDataInput } from "./JobCreateNestedManyWithoutTestDataInput";
import { Type } from "class-transformer";
import { EnumTestDatumStatus } from "./EnumTestDatumStatus";
@InputType()
class TestDatumCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  api?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contents?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imperialMetric?: string | null;

  @ApiProperty({
    required: false,
    type: () => JobCreateNestedManyWithoutTestDataInput,
  })
  @ValidateNested()
  @Type(() => JobCreateNestedManyWithoutTestDataInput)
  @IsOptional()
  @Field(() => JobCreateNestedManyWithoutTestDataInput, {
    nullable: true,
  })
  jobs?: JobCreateNestedManyWithoutTestDataInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productLevel?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  productTemp?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  specificGravity?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumTestDatumStatus,
  })
  @IsEnum(EnumTestDatumStatus)
  @IsOptional()
  @Field(() => EnumTestDatumStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}
export { TestDatumCreateInput };
