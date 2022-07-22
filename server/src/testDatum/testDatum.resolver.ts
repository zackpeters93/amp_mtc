import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TestDatumResolverBase } from "./base/testDatum.resolver.base";
import { TestDatum } from "./base/TestDatum";
import { TestDatumService } from "./testDatum.service";

@graphql.Resolver(() => TestDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestDatumResolver extends TestDatumResolverBase {
  constructor(
    protected readonly service: TestDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
