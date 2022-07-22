import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { JobModule } from "./job/job.module";
import { CompanyModule } from "./company/company.module";
import { ContactModule } from "./contact/contact.module";
import { FacilityModule } from "./facility/facility.module";
import { AssetModule } from "./asset/asset.module";
import { TestDatumModule } from "./testDatum/testDatum.module";
import { TankDatumModule } from "./tankDatum/tankDatum.module";
import { TestResultModule } from "./testResult/testResult.module";
import { TicketModule } from "./ticket/ticket.module";
import { QuoteModule } from "./quote/quote.module";
import { TechnicianModule } from "./technician/technician.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    JobModule,
    CompanyModule,
    ContactModule,
    FacilityModule,
    AssetModule,
    TestDatumModule,
    TankDatumModule,
    TestResultModule,
    TicketModule,
    QuoteModule,
    TechnicianModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
