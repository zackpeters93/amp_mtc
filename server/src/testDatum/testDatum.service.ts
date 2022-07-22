import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TestDatumServiceBase } from "./base/testDatum.service.base";

@Injectable()
export class TestDatumService extends TestDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
