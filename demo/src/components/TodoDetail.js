import Component from "../libs/Component.js"

class TodoDetail extends Component{

    render(){
        let todo = document.getElementsByClassName("todo active")[0];
        let title = todo.getElementsByClassName("title")[0].innerHTML;
        let time = todo.getElementsByClassName("time")[0].innerHTML;
        let content = todo.getElementsByClassName("content")[0].innerHTML;


        return `
            <header style="text-align: center;font-size: 30px" >Todo Detail</header>
            <div id="editArea">
                <h1 id="title" style="text-align: center">${title}</h1>
                <h3 id="time" style="text-align: center">${time}</h3><br\>
                <p id="content">${content}</p>
            </div>
            
            <footer><button type="button" id="edit" onclick="TodoController.editMode()">编辑文本</button>&nbsp&nbsp
            <button  id="save" onclick="TodoController.save()" style="display: none">保存文本</button></footer>
           
        `

    }
}
export default TodoDetail