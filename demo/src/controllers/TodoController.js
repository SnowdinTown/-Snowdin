import Controller from "../libs/Controller.js";

class TodoController extends Controller {

  clickTodo(id) {
    this.model.update(data => ({
      ...data,
      activeTodoId: id
    }))
  }

  addTodo() {
    const nextId = new Date().valueOf();
    let creatTime = "";
    this.model.update(data => ({
      ...data,
      todos: [...data.todos, { id: nextId,time:creatTime, title: '请输入标题', content: '请输入内容' }]
    }))
    this.clickTodo(nextId);
    this.editMode();
  }

  editMode(){
    let chuild1 = document.getElementById("title");
    let newTitle = document.createElement("textarea");
    let node = document.createTextNode(chuild1.innerHTML);
    newTitle.id = "newTitle";
    newTitle.style.overflow="hidden";
    newTitle.style.width="100%";
    newTitle.style.fontSize="35px";
    newTitle.style.textAlign="center";
    newTitle.appendChild(node);
    chuild1.replaceWith(newTitle);
    let chuild2 = document.getElementById("content");
    let newContent = document.createElement("textarea");
    let node2 = document.createTextNode(chuild2.innerHTML);
    newContent.id = "newContent";
    newContent.style.overflow="hidden";
    newContent.style.width="100%";
    newContent.style.height="300px";
    newContent.appendChild(node2);
    chuild2.replaceWith(newContent);
    let button1 = document.getElementById("edit");
    button1.style.display="none";
    let button2 = document.getElementById("save");
    button2.style.display="inline";
  }

  save(){
    let content = document.getElementById("newContent").value;
    let title = document.getElementById("newTitle").value;
    let creatTime = new Date().toLocaleString();
    for(let todo of this.model.data.todos){
      if(todo.id == this.model.data.activeTodoId){
        if(todo.time == ""){
          todo.time = creatTime;
        }
        todo.title = title;
        todo.content = content;
      }
    }

    this.clickTodo(this.model.data.activeTodoId);

  }
}
export default TodoController