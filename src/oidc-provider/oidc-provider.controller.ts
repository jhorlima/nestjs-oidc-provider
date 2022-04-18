import { Request, Response } from 'express';
import {
  All,
  Req,
  Res,
  Get,
  Post,
  Inject,
  Redirect,
  Controller,
} from '@nestjs/common';
import { Provider } from 'oidc-provider';
import { AccountsService } from '../accounts/accounts.service';

@Controller('oidc')
export class OidcProviderController {
  @Inject()
  readonly oidcProvider: Provider;

  @Inject()
  private readonly accountService: AccountsService;

  //https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#user-flows
  @Get('/interaction/:uid')
  @Redirect()
  public async interaction(@Req() req: Request, @Res() res: Response) {
    let url = 'https://gupy.gupy.io/companies/signin';

    const { uid, prompt } = await this.oidcProvider.interactionDetails(
      req,
      res,
    );

    switch (prompt.name) {
      case 'consent': {
        url += `/consent?state=${uid}`;
        break;
      }
      case 'login':
      default: {
        url += `?state=${uid}`;
        break;
      }
    }

    return { url };
  }

  @Post('/interaction/:uid/login')
  public async interactionAprove(@Req() req: Request, @Res() res: Response) {
    const account = await this.accountService.findByUid('def_12345678900');

    const result = {
      login: {
        accountId: account.uid,
        name: account.name,
        photo: account.photo,
      },
    };

    const redirectUrl = await this.oidcProvider.interactionResult(
      req,
      res,
      result,
      {
        mergeWithLastSubmission: false,
      },
    );

    return redirectUrl;
  }

  @All('*')
  public mountedOidc(@Req() req: Request, @Res() res: Response) {
    console.log(req.originalUrl);
    req.url = req.originalUrl.replace('/oidc', '');

    const callback = this.oidcProvider.callback();
    return callback(req, res);
  }
}
