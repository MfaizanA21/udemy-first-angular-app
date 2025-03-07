import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./tasks/task/task.component";
import { CreateTaskComponent } from "./tasks/create-task/create-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent, 
        TasksComponent, 
        TaskComponent, 
        CreateTaskComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, SharedModule]
})
export class AppModule {

}