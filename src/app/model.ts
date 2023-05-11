export class Model {
  user;
  items;

  constructor() {
    this.user = 'seyaz';
    this.items = [
      new ToDoItem("Spor",true),
      new ToDoItem("Kumar",false),
      new ToDoItem("Yürüyüş",true),
      new ToDoItem("Kitap Okumak",false),
      new ToDoItem("Boks Yapmak",false),
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
