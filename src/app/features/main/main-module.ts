import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import { Main } from './main';

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule],
  exports: [Main]
})
export class MainModule {}
