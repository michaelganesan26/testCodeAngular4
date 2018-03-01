import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logs:string[] = [];

  constructor() {
   }

   log(message):void{

       this.logs.push(`${message} ${new Date().toTimeString()}`);
       console.log(this.logs);
   }

   clearLog():void{

    this.logs = [];

   }

   

}
