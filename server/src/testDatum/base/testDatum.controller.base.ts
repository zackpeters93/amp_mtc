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
import { TestDatumService } from "../testDatum.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TestDatumCreateInput } from "./TestDatumCreateInput";
import { TestDatumWhereInput } from "./TestDatumWhereInput";
import { TestDatumWhereUniqueInput } from "./TestDatumWhereUniqueInput";
import { TestDatumFindManyArgs } from "./TestDatumFindManyArgs";
import { TestDatumUpdateInput } from "./TestDatumUpdateInput";
import { TestDatum } from "./TestDatum";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TestDatumControllerBase {
  constructor(
    protected readonly service: TestDatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestDatum",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TestDatum })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TestDatumCreateInput): Promise<TestDatum> {
    return await this.service.create({
      data: data,
      select: {
        api: true,
        contents: true,
        createdAt: true,
        id: true,
        imperialMetric: true,
        productLevel: true,
        productTemp: true,
        specificGravity: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestDatum",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [TestDatum] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TestDatumFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<TestDatum[]> {
    const args = plainToClass(TestDatumFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        api: true,
        contents: true,
        createdAt: true,
        id: true,
        imperialMetric: true,
        productLevel: true,
        productTemp: true,
        specificGravity: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "TestDatum",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TestDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TestDatumWhereUniqueInput
  ): Promise<TestDatum | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        api: true,
        contents: true,
        createdAt: true,
        id: true,
        imperialMetric: true,
        productLevel: true,
        productTemp: true,
        specificGravity: true,
        status: true,
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
    resource: "TestDatum",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TestDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TestDatumWhereUniqueInput,
    @common.Body() data: TestDatumUpdateInput
  ): Promise<TestDatum | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          api: true,
          contents: true,
          createdAt: true,
          id: true,
          imperialMetric: true,
          productLevel: true,
          productTemp: true,
          specificGravity: true,
          status: true,
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
    resource: "TestDatum",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: TestDatum })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TestDatumWhereUniqueInput
  ): Promise<TestDatum | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          api: true,
          contents: true,
          createdAt: true,
          id: true,
          imperialMetric: true,
          productLevel: true,
          productTemp: true,
          specificGravity: true,
          status: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Job",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/jobs")
  @ApiNestedQuery(JobFindManyArgs)
  async findManyJobs(
    @common.Req() request: Request,
    @common.Param() params: TestDatumWhereUniqueInput
  ): Promise<Job[]> {
    const query = plainToClass(JobFindManyArgs, request.query);
    const results = await this.service.findJobs(params.id, {
      ...query,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        bonusAllocation: true,
        businessUnit: true,

        client: {
          select: {
            id: true,
          },
        },

        comments: true,
        createdAt: true,
        id: true,
        jobStatus: true,
        jobType: true,
        leadTechnician: true,
        quote: true,
        report: true,

        testData: {
          select: {
            id: true,
          },
        },

        testResults: true,
        tickets: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "TestDatum",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/jobs")
  async connectJobs(
    @common.Param() params: TestDatumWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TestDatum",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/jobs")
  async updateJobs(
    @common.Param() params: TestDatumWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "TestDatum",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/jobs")
  async disconnectJobs(
    @common.Param() params: TestDatumWhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
