import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AccountsModule } from './accounts/accounts.module';
import { OidcProviderModule } from './oidc-provider/oidc-provider.module';

@Module({
  imports: [AccountsModule, OidcProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
