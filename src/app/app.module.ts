import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [AppComponent, UserTableComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatTableModule, MatSortModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
