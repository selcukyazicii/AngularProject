export class Model {
  user;
  items;

  constructor() {
    this.user = 'seyaz';
    this.items = [
      new ToDoItem("Spor","True"),
      new ToDoItem("Kumar","False"),
      new ToDoItem("Yürüyüş","True"),
      new ToDoItem("Kitap Okumak","False"),
    ];
  }
}

export class ToDoItem{
description;
action;

constructor(description:any,action:any){
    this.action=action;
    this.description=description;
}
}
