import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './components/subscriptions.component';
import {SubscriptionsRoutingModule} from "./subscriptions-routing-module";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    SubscriptionsComponent
  ],
  imports: [
    SubscriptionsRoutingModule,
    CommonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class SubscriptionsModule { }
