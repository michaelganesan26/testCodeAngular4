import { IBill, IBillRequest } from './test-code/billrequest.interface';
import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

    logs: string[] = [];

    constructor() {
    }

    log(message): void {

        this.logs.push(`${message} ${new Date().toTimeString()}`);
        console.log(this.logs);
    }

    clearLog(): void {

        this.logs = [];

    }

   logBill(bill:IBill):void{

      console.log(`Clicked: ${bill.br.bill_name}!!`);

    }

    logBillWithMessage(message:string,bill:IBill):void{

        console.log(`${message}, ${bill.br.bill_name}!!`);
  
      }
   

}
