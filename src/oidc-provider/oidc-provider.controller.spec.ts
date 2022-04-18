import { Test, TestingModule } from '@nestjs/testing';
import { OidcProviderController } from './oidc-provider.controller';

describe('OidcProviderController', () => {
  let controller: OidcProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OidcProviderController],
    }).compile();

    controller = module.get<OidcProviderController>(OidcProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
