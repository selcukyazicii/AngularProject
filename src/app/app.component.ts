import { Component } from '@angular/core';
import { Model ,ToDoItem} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model=new Model();
  isDisplay=false;
  getName(){
    return this.model.user;
  }

  getItem(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(x=>x.action==true);
  }
  addItem(value:any){
    if(value!=""){
      this.model.items.push(new ToDoItem(value,true))
    }
  }
}
