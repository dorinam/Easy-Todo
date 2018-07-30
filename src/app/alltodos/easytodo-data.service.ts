import { Injectable } from '@angular/core';
import {Easytodo} from './easytodo';

@Injectable()
export class EasytodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

    // Placeholder for todo's
    alltodos: Easytodo[] = [];

  constructor() { }

  // Simulate POST /todos
  addEasytodo(easytodo: Easytodo): EasytodoDataService {
    if (!easytodo.id) {
      easytodo.id = ++this.lastId;
    }
    this.alltodos.push(easytodo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteEasytodoById(id: number): EasytodoDataService {
    this.alltodos = this.alltodos
      .filter(easytodo => easytodo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateEasytodoById(id: number, values: Object = {}):  Easytodo | any {
    const easytodo = this.getEasytodoById(id) ;
    if (!easytodo) {
      return this;
    }
    Object.assign(easytodo, values);
    return easytodo;
  }

  // Simulate GET /todos
  getAllAlltodos(): Easytodo[] {
    return this.alltodos;
  }

  // Simulate GET /todos/:id
  getEasytodoById(id: number):  Easytodo | any {
    return this.alltodos
      .filter(easytodo => easytodo.id === id)
      .pop();
  }

  // Simulate GET /todos/:category
  getEasytodoByCategory(id: number): Easytodo[] {
    return this.alltodos
      .filter(easytodo => easytodo.category === id);
  }

  // Toggle todo complete
  toggleEasytodoComplete(easytodo: Easytodo) {
    const updatedEasytodo = this.updateEasytodoById(easytodo.id, {
      complete: !easytodo.complete
    });
    return updatedEasytodo;
  }
}