/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateTankDatumArgs } from "./CreateTankDatumArgs";
import { UpdateTankDatumArgs } from "./UpdateTankDatumArgs";
import { DeleteTankDatumArgs } from "./DeleteTankDatumArgs";
import { TankDatumFindManyArgs } from "./TankDatumFindManyArgs";
import { TankDatumFindUniqueArgs } from "./TankDatumFindUniqueArgs";
import { TankDatum } from "./TankDatum";
import { TankDatumService } from "../tankDatum.service";

@graphql.Resolver(() => TankDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TankDatumResolverBase {
  constructor(
    protected readonly service: TankDatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TankDatum",
    action: "read",
    possession: "any",
  })
  async _tankDataMeta(
    @graphql.Args() args: TankDatumFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [TankDatum])
  @nestAccessControl.UseRoles({
    resource: "TankDatum",
    action: "read",
    possession: "any",
  })
  async tankData(
    @graphql.Args() args: TankDatumFindManyArgs
  ): Promise<TankDatum[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TankDatum, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TankDatum",
    action: "read",
    possession: "own",
  })
  async tankDatum(
    @graphql.Args() args: TankDatumFindUniqueArgs
  ): Promise<TankDatum | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TankDatum)
  @nestAccessControl.UseRoles({
    resource: "TankDatum",
    action: "create",
    possession: "any",
  })
  async createTankDatum(
    @graphql.Args() args: CreateTankDatumArgs
  ): Promise<TankDatum> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TankDatum)
  @nestAccessControl.UseRoles({
    resource: "TankDatum",
    action: "update",
    possession: "any",
  })
  async updateTankDatum(
    @graphql.Args() args: UpdateTankDatumArgs
  ): Promise<TankDatum | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TankDatum)
  @nestAccessControl.UseRoles({
    resource: "TankDatum",
    action: "delete",
    possession: "any",
  })
  async deleteTankDatum(
    @graphql.Args() args: DeleteTankDatumArgs
  ): Promise<TankDatum | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}