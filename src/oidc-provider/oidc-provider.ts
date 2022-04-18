import { Provider } from 'oidc-provider';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OidcProvider {
  readonly provider: Provider;

  constructor() {
    // https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#basic-configuration-example
    this.provider = new Provider('http://localhost:3000', {
      clients: [
        {
          client_name: 'CIAM App',
          client_id: 'd5a1229c-acbc-467e-b18b-8f067d3e23e1',
          client_secret: 'd5a1229c-acbc-467e-b18b-8f067d3e23e1',
          redirect_uris: ['http://localhost:8080/oauth2/callback'],
          application_type: 'web',
          response_types: ['code'],
          token_endpoint_auth_method: 'none',
        },
      ],
      pkce: {
        methods: ['S256'],
        required: () => false,
      },
    });

    //http://localhost:3000/oidc/auth?client_id=d5a1229c-acbc-467e-b18b-8f067d3e23e1&response_type=code&redirect_uri=http://localhost:8080/oauth2/callback
  }
}
