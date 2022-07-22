import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TechnicianServiceBase } from "./base/technician.service.base";

@Injectable()
export class TechnicianService extends TechnicianServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
