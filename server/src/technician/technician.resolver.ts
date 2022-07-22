import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TechnicianResolverBase } from "./base/technician.resolver.base";
import { Technician } from "./base/Technician";
import { TechnicianService } from "./technician.service";

@graphql.Resolver(() => Technician)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TechnicianResolver extends TechnicianResolverBase {
  constructor(
    protected readonly service: TechnicianService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
