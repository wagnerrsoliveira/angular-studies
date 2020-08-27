import { Routes } from '@angular/router';

import { ListTasksComponent } from './list';
import { AddTaskComponent } from './add';
import { EditTaskComponent } from './edit';

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTasksComponent
    },
    {
        path: 'tasks/add',
        component: AddTaskComponent
    },
    {
        path:'tasks/edit/:id',
        component: EditTaskComponent
    }
];