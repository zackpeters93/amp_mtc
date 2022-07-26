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
import { CreateTestResultArgs } from "./CreateTestResultArgs";
import { UpdateTestResultArgs } from "./UpdateTestResultArgs";
import { DeleteTestResultArgs } from "./DeleteTestResultArgs";
import { TestResultFindManyArgs } from "./TestResultFindManyArgs";
import { TestResultFindUniqueArgs } from "./TestResultFindUniqueArgs";
import { TestResult } from "./TestResult";
import { TestResultService } from "../testResult.service";

@graphql.Resolver(() => TestResult)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestResultResolverBase {
  constructor(
    protected readonly service: TestResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "any",
  })
  async _testResultsMeta(
    @graphql.Args() args: TestResultFindManyArgs
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
  @graphql.Query(() => [TestResult])
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "any",
  })
  async testResults(
    @graphql.Args() args: TestResultFindManyArgs
  ): Promise<TestResult[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => TestResult, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "own",
  })
  async testResult(
    @graphql.Args() args: TestResultFindUniqueArgs
  ): Promise<TestResult | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestResult)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "create",
    possession: "any",
  })
  async createTestResult(
    @graphql.Args() args: CreateTestResultArgs
  ): Promise<TestResult> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => TestResult)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "update",
    possession: "any",
  })
  async updateTestResult(
    @graphql.Args() args: UpdateTestResultArgs
  ): Promise<TestResult | null> {
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

  @graphql.Mutation(() => TestResult)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "delete",
    possession: "any",
  })
  async deleteTestResult(
    @graphql.Args() args: DeleteTestResultArgs
  ): Promise<TestResult | null> {
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
