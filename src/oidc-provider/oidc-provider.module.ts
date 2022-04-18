import { Module } from '@nestjs/common';
import { AccountsModule } from '../accounts/accounts.module';

import { OidcProvider } from './oidc-provider';
import { OidcProviderController } from './oidc-provider.controller';
import { Provider } from 'oidc-provider';

@Module({
  imports: [AccountsModule],
  providers: [
    OidcProvider,
    {
      provide: Provider,
      useFactory: (oidcProvider: OidcProvider) => {
        return oidcProvider.provider;
      },
      inject: [OidcProvider],
    },
  ],
  controllers: [OidcProviderController],
})
export class OidcProviderModule {}
