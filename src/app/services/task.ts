import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, TaskStatus } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  // La ruta base: '/api/tasks' será redirigida a http://localhost:8080/api/tasks gracias al proxy
  private apiUrl = '/api/tasks';

  // Inyección de dependencias: Le dice a Angular que proporcione una instancia de HttpClient
  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista de tareas, con filtro opcional por estado.
   */
  getTasks(status?: TaskStatus): Observable<Task[]> { // <-- Aceptar parámetro opcional
    let url = this.apiUrl;
    if (status) {
      // Si se pasa un estado, añade el parámetro de query
      url += `?status=${status}`; 
    }
    return this.http.get<Task[]>(url);
  }
}
