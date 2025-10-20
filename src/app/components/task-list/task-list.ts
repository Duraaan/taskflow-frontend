import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  tasks: Task[] = []; // Inicializamos el array vacío para guardar las tareas
  errorMessage: string | null = null;

  // Inyectamos ActivatedRoute para leer datos de la ruta
  constructor(private route: ActivatedRoute) { }

  // ngOnInit se ejecuta una vez que el componente se ha creado.
  ngOnInit(): void {
    // 1. OBTENER LOS DATOS RESOLVIDOS: Lee los datos que el router guardó en 'taskData'
    this.tasks = this.route.snapshot.data['taskData']; 
    console.log('Tareas cargadas desde Resolver:', this.tasks); // Verificar
  }
}
