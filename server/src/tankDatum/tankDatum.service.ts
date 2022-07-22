import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TankDatumServiceBase } from "./base/tankDatum.service.base";

@Injectable()
export class TankDatumService extends TankDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
