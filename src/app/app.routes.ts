import { Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { TaskService } from './services/task';
import { TaskList } from './components/task-list/task-list';
import { TaskForm } from './components/task-form/task-form';

// Define la función resolver
const taskListResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // 1. Usamos inject() para obtener una instancia del servicio
  const taskService = inject(TaskService);
  // 2. Llamamos al método y el router esperará a que el Observable se complete
  return taskService.getTasks();
};

export const routes: Routes = [
  { 
    path: 'tasks', 
    component: TaskList,
    // ¡Añadir el Resolver!
    resolve: {
      taskData: taskListResolver // 'taskData' es la clave que usamos en el componente (route.snapshot.data['taskData'])
    }
  },
  { path: 'tasks/new', component: TaskForm },
  { path: 'tasks/edit/:id', component: TaskForm },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: '**', redirectTo: '/tasks' }
];
