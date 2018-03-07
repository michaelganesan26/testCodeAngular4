import { TaskMockDataService } from './test-code/parent-child-component/task-mock-data.service';
import { MockDataService } from './test-code/mock-data.service';
import { LoggerService } from './logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProvDemoComponent } from './test-code/prov-demo/prov-demo.component';
import { MyClass } from './test-code/MyClass';
import { MyClassMockData } from './test-code/MyClassMock';
import { ChangeDetectionComponent } from './test-code/change-detection/change-detection.component';
import { HelloWorldComponent } from './test-code/hello-world/hello-world.component';
import { HighlightDirective } from './test-code/highlight.directive';
import { DATA_PRODUCTION_SERVER, DATA_TEST_SERVER } from './test-code/global-variables';
import { ListbillsComponent } from './test-code/listbills/listbills.component';
import { DatefromstartPipe } from './test-code/datefromstart.pipe';
import { EventDrivenComponent } from './test-code/event-driven/event-driven.component';
import { HambugerIconComponent } from './controls/hambuger-icon/hambuger-icon.component';
import { ChildComponentComponent } from './test-code/parent-child-component/child-component/child-component.component';



@NgModule({
  declarations: [
    AppComponent,
    ProvDemoComponent,
    ChangeDetectionComponent,
    HelloWorldComponent,
    HighlightDirective,
    ListbillsComponent,
    DatefromstartPipe,
    EventDrivenComponent,
    HambugerIconComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  //providers: [{provide:MyClass,useClass:MyClassMockData}],
  providers: [{ provide: MyClass, useClass: MyClass },
  { provide: DATA_TEST_SERVER, useValue: "mikegServer" },
    LoggerService, MockDataService,TaskMockDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
