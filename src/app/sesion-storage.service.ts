import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionStorageService {

  constructor() { }
  // Guardar datos en Session Storage
  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  // Obtener datos de Session Storage
  getItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  // Eliminar un ítem de Session Storage
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  // Limpiar todos los datos de Session Storage
  clear(): void {
    sessionStorage.clear();
  }
  
}
