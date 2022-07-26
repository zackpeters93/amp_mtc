/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TestResultService } from "../testResult.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TestResultCreateInput } from "./TestResultCreateInput";
import { TestResultWhereInput } from "./TestResultWhereInput";
import { TestResultWhereUniqueInput } from "./TestResultWhereUniqueInput";
import { TestResultFindManyArgs } from "./TestResultFindManyArgs";
import { TestResultUpdateInput } from "./TestResultUpdateInput";
import { TestResult } from "./TestResult";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TestResultControllerBase {
  constructor(
    protected readonly service: TestResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TestResult })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TestResultCreateInput
  ): Promise<TestResult> {
    return await this.service.create({
      data: data,
      select: {
        comments: true,
        createdAt: true,
        id: true,
        imperialMetric: true,
        measuredLeakRate: true,
        result: true,
        testLength: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TestResult] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TestResultFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TestResult[]> {
    const args = plainToClass(TestResultFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        comments: true,
        createdAt: true,
        id: true,
        imperialMetric: true,
        measuredLeakRate: true,
        result: true,
        testLength: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TestResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TestResultWhereUniqueInput
  ): Promise<TestResult | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        comments: true,
        createdAt: true,
        id: true,
        imperialMetric: true,
        measuredLeakRate: true,
        result: true,
        testLength: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TestResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TestResultWhereUniqueInput,
    @common.Body() data: TestResultUpdateInput
  ): Promise<TestResult | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          comments: true,
          createdAt: true,
          id: true,
          imperialMetric: true,
          measuredLeakRate: true,
          result: true,
          testLength: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TestResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TestResultWhereUniqueInput
  ): Promise<TestResult | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          comments: true,
          createdAt: true,
          id: true,
          imperialMetric: true,
          measuredLeakRate: true,
          result: true,
          testLength: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
