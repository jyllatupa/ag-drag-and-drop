import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  todo: string[] = ['Estudiar Ingles', 'Estudiar Angular', 'Ir a Trabajar']
  progress: string[] = [];
  done: string[] = [];

  tarea: string = '';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  agregarTarea(){
    if(this.tarea == ''){
      return;
    }
    this.todo.push(this.tarea);
    this.tarea = '';
  }
}
