import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //for input and output forms 
import { HttpClientModule } from '@angular/common/http'; //for api calling
import { NgxPaginationModule } from 'ngx-pagination'; //for pagination
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //for filter data
import { ReactiveFormsModule } from '@angular/forms';//for validation

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"task", component:TaskComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
