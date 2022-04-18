import { Injectable } from '@nestjs/common';
import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  findByUid(uid: Account['uid']) {
    return Promise.resolve({
      uid,
      name: 'Jhordan Lima',
      photo: `https://i.pravatar.cc/150?u=${uid}`,
    } as Account);
  }
}
