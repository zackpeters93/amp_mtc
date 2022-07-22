import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TestResultResolverBase } from "./base/testResult.resolver.base";
import { TestResult } from "./base/TestResult";
import { TestResultService } from "./testResult.service";

@graphql.Resolver(() => TestResult)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestResultResolver extends TestResultResolverBase {
  constructor(
    protected readonly service: TestResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
