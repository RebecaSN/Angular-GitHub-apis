import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GhHomeComponent } from './Components/gh-home/gh-home.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GhDialogComponent } from './Components/gh-dialog/gh-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { GhApiService } from './services/gh-api.service';




@NgModule({
  declarations: [
    GhHomeComponent,
    GhDialogComponent
  ], //serve para delarar components, pipes e diretivas
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
    //responsavl por fazer as requisições http na aplicação

  ],
  exports:[
    GhHomeComponent

  ],
  providers:[
   GhApiService,

  ]//dentro desse provider eles aceitam quais serviços a gente vai utilizar, e quais interceptores a gente vai utilizar
})
export class GhUsersModule { }










