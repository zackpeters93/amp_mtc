/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, TestDatum, Job } from "@prisma/client";

export class TestDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TestDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDatumFindManyArgs>
  ): Promise<number> {
    return this.prisma.testDatum.count(args);
  }

  async findMany<T extends Prisma.TestDatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDatumFindManyArgs>
  ): Promise<TestDatum[]> {
    return this.prisma.testDatum.findMany(args);
  }
  async findOne<T extends Prisma.TestDatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDatumFindUniqueArgs>
  ): Promise<TestDatum | null> {
    return this.prisma.testDatum.findUnique(args);
  }
  async create<T extends Prisma.TestDatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDatumCreateArgs>
  ): Promise<TestDatum> {
    return this.prisma.testDatum.create<T>(args);
  }
  async update<T extends Prisma.TestDatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDatumUpdateArgs>
  ): Promise<TestDatum> {
    return this.prisma.testDatum.update<T>(args);
  }
  async delete<T extends Prisma.TestDatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TestDatumDeleteArgs>
  ): Promise<TestDatum> {
    return this.prisma.testDatum.delete(args);
  }

  async findJobs(
    parentId: string,
    args: Prisma.JobFindManyArgs
  ): Promise<Job[]> {
    return this.prisma.testDatum
      .findUnique({
        where: { id: parentId },
      })
      .jobs(args);
  }
}