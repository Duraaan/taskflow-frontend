// Define los posibles estados de una tarea (TypeScript Enum/Union Type)
export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

// 1. Interfaz para la respuesta del backend (lo que obtenemos)
export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string; 
}

// 2. Interfaz para la petición al backend (lo que enviaremos para crear/actualizar)
export interface TaskRequest {
  title: string;
  description: string;
  status: TaskStatus;
}