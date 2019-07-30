import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatSidenavModule, MatButtonModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { TodoService } from './todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoSummaryComponent } from './todo-summary/todo-summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAgoPipe } from './dateAgo.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoAddComponent,
        TodoSummaryComponent,
        DateAgoPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatCardModule,
        MatSidenavModule,
        NgxMaterialTimepickerModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatMenuModule,
        DragDropModule
    ],
    providers: [
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
