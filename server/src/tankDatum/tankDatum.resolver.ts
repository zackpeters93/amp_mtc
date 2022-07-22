import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TankDatumResolverBase } from "./base/tankDatum.resolver.base";
import { TankDatum } from "./base/TankDatum";
import { TankDatumService } from "./tankDatum.service";

@graphql.Resolver(() => TankDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TankDatumResolver extends TankDatumResolverBase {
  constructor(
    protected readonly service: TankDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
