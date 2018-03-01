import { Injectable } from '@angular/core';


@Injectable()
export class MyClassMockData {
    public name: string = "My Mock Data Class";
    public dt: Date = new Date();
    public time: Number;
    public num: Number;


    constructor() {
        this.time = this.dt.getTime();
        this.num = Math.floor(Math.random() * 1000);

    }






}

