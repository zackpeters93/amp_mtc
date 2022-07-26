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
import { FacilityService } from "../facility.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FacilityCreateInput } from "./FacilityCreateInput";
import { FacilityWhereInput } from "./FacilityWhereInput";
import { FacilityWhereUniqueInput } from "./FacilityWhereUniqueInput";
import { FacilityFindManyArgs } from "./FacilityFindManyArgs";
import { FacilityUpdateInput } from "./FacilityUpdateInput";
import { Facility } from "./Facility";
import { AssetFindManyArgs } from "../../asset/base/AssetFindManyArgs";
import { Asset } from "../../asset/base/Asset";
import { AssetWhereUniqueInput } from "../../asset/base/AssetWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FacilityControllerBase {
  constructor(
    protected readonly service: FacilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Facility })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: FacilityCreateInput): Promise<Facility> {
    return await this.service.create({
      data: {
        ...data,

        contact: data.contact
          ? {
              connect: data.contact,
            }
          : undefined,

        owner: data.owner
          ? {
              connect: data.owner,
            }
          : undefined,
      },
      select: {
        address: true,
        city: true,

        contact: {
          select: {
            id: true,
          },
        },

        country: true,
        createdAt: true,
        id: true,
        location: true,

        owner: {
          select: {
            id: true,
          },
        },

        state: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Facility] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FacilityFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Facility[]> {
    const args = plainToClass(FacilityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: true,
        city: true,

        contact: {
          select: {
            id: true,
          },
        },

        country: true,
        createdAt: true,
        id: true,
        location: true,

        owner: {
          select: {
            id: true,
          },
        },

        state: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Facility",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Facility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FacilityWhereUniqueInput
  ): Promise<Facility | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        city: true,

        contact: {
          select: {
            id: true,
          },
        },

        country: true,
        createdAt: true,
        id: true,
        location: true,

        owner: {
          select: {
            id: true,
          },
        },

        state: true,
        updatedAt: true,
        zipCode: true,
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
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Facility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() data: FacilityUpdateInput
  ): Promise<Facility | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          contact: data.contact
            ? {
                connect: data.contact,
              }
            : undefined,

          owner: data.owner
            ? {
                connect: data.owner,
              }
            : undefined,
        },
        select: {
          address: true,
          city: true,

          contact: {
            select: {
              id: true,
            },
          },

          country: true,
          createdAt: true,
          id: true,
          location: true,

          owner: {
            select: {
              id: true,
            },
          },

          state: true,
          updatedAt: true,
          zipCode: true,
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
    resource: "Facility",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Facility })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FacilityWhereUniqueInput
  ): Promise<Facility | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          city: true,

          contact: {
            select: {
              id: true,
            },
          },

          country: true,
          createdAt: true,
          id: true,
          location: true,

          owner: {
            select: {
              id: true,
            },
          },

          state: true,
          updatedAt: true,
          zipCode: true,
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
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/assets")
  @ApiNestedQuery(AssetFindManyArgs)
  async findManyAssets(
    @common.Req() request: Request,
    @common.Param() params: FacilityWhereUniqueInput
  ): Promise<Asset[]> {
    const query = plainToClass(AssetFindManyArgs, request.query);
    const results = await this.service.findAssets(params.id, {
      ...query,
      select: {
        assetName: true,
        assetType: true,
        createdAt: true,

        facility: {
          select: {
            id: true,
          },
        },

        id: true,
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
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/assets")
  async connectAssets(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: AssetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assets: {
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
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/assets")
  async updateAssets(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: AssetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assets: {
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
    resource: "Facility",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/assets")
  async disconnectAssets(
    @common.Param() params: FacilityWhereUniqueInput,
    @common.Body() body: AssetWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assets: {
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
