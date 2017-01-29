import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  constructor() { }

  messages = [
    { text: '1234', val: 1 },
    { text: '23434', val: 2 },
    { text: 'xxxxx', val: 3 }
  ]

}
