import { Test, TestingModule } from '@nestjs/testing';
import { OidcProvider } from './oidc-provider';

describe('OidcProvider', () => {
  let provider: OidcProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OidcProvider],
    }).compile();

    provider = module.get<OidcProvider>(OidcProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
